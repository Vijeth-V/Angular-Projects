import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../core/interfaces/movie';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-movie-item',
  standalone: false,
  
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {
  
  @Input() movie!: Movie;
  loading: boolean = false;
  
  constructor(private router: Router, private scrollService: ScrollService) {}

  goToDetails(movieId: number): void {
    
    this.scrollService.setScrollPosition(window.location.pathname);
    
    this.loading = true;

    this.router.navigate([`/movies/${movieId}`]).then(() => {
      this.loading = false; 
    });
  }
 
}

