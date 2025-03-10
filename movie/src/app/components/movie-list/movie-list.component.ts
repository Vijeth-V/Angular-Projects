import { Component, Input } from '@angular/core';
import { Movie } from '../../core/interfaces/movie';
import { MovieService } from '../../core/services/movie.service';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-movie-list',
  standalone: false,

  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: Movie[] = [];
  currentPage: number = 1;

  constructor(private movieService: MovieService, private scrollService: ScrollService) { }

  // ngAfterViewInit(): void {
  //   // Restore scroll position after the view is initialized
  //   const savedScrollPosition = this.scrollService.getScrollPosition();
  //   if (savedScrollPosition) {
  //     setTimeout(() => {
  //       window.scrollTo(0, savedScrollPosition);
  //     }, 0);
  //   }
  // }

  ngOnInit(): void {

    // const scrollPosition = this.scrollService.getScrollPosition(window.location.pathname);
    // window.scrollTo(0, scrollPosition);

    this.loadMovies();

    // const savedScrollPosition = this.scrollService.getScrollPosition();
    // if (savedScrollPosition) {
    //   setTimeout(() => {
    //     window.scrollTo(0, savedScrollPosition);
    //   }, 0);
    // }

  }

  ngAfterViewChecked(): void {
    // If the scroll position is not restored during ngOnInit, try it again in ngAfterViewChecked.
    const scrollPosition = this.scrollService.getScrollPosition(window.location.pathname);
    if(scrollPosition){
      window.scrollTo(0, scrollPosition);
    }
      

  }

  // ngAfterViewInit(): void {
  //   // Restore scroll position
  //   const savedScrollPosition = this.scrollService.getScrollPosition();
  //   if (savedScrollPosition) {
  //     window.scrollTo(0, savedScrollPosition);
  //   }
  // }

  loadMovies(): void {
    this.movieService.fetchMovies(this.currentPage).subscribe((newMovies) => {
      this.movies = [...this.movies, ...newMovies];
      this.currentPage++;
    });
  }
}
