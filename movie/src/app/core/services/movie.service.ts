import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://api.themoviedb.org/3/discover/movie';
  private apiKey = '42a33cbd3ae95139204f710a18c86853';  

  constructor(private http: HttpClient) {}

  fetchMovies(page: number = 1): Observable<Movie[]> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=${page}`;
  
    return this.http.get<{ results: Movie[] }>(url).pipe(
      map((response) => response.results)
    );
  }

  fetchMovieDetails(movieId: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get<any>(url);
  }

  fetchMovieImages(movieId: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
  
  fetchMovieCast(movieId: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  fetchMovieTrailers(movieId: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.apiKey}&language=en-US`;
    return this.http.get<any>(url);
  }

}

 