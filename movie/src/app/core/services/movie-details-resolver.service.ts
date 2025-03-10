import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { MovieService } from './movie.service';
import { forkJoin, from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsResolverService implements Resolve<any> {
  constructor(private movieService: MovieService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const movieId = route.paramMap.get('id');

    if (!movieId) {
      return of(null); 
    }

    return forkJoin({
      details: this.movieService.fetchMovieDetails(+movieId),
      images: this.movieService.fetchMovieImages(+movieId),
      cast: this.movieService.fetchMovieCast(+movieId),
      trailers: this.movieService.fetchMovieTrailers(+movieId),
    }).pipe(
      map((data) => {
        const posterPath = data.details.poster_path;
        if (posterPath) {
          this.preloadImage(`https://image.tmdb.org/t/p/original${posterPath}`);
        }
        return {
          ...data.details,
          images: data.images,
          credits: { cast: data.cast.cast },
          trailers: data.trailers,
        };
      })
    );
  }

  private preloadImage(url: string): void {
    const img = new Image();
    img.src = url;
   
  }
}
