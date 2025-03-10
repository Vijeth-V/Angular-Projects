import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { YoutubePlayerComponent } from '../youtube-player/youtube-player.component';
import { MovieService } from '../../core/services/movie.service';

@Component({
  selector: 'app-movie-details',
  standalone: false,

  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {

  movieDetails: any;
  additionalPosters: any[] = [];
  cast: any[] = [];
  genreList: string = '';

  trailers: any[] = [];
  currentTrailerIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    const resolvedData = this.route.snapshot.data['movieDetails'];

    if (resolvedData) {
      this.movieDetails = resolvedData;

      if (resolvedData.genres && resolvedData.genres.length > 0) {
        this.genreList = resolvedData.genres.map((genre: { name: string }) => genre.name).join(', ');
      }

      this.additionalPosters = resolvedData.images?.posters || [];

      this.cast = resolvedData.credits?.cast || [];

      this.trailers = resolvedData.trailers?.results || [];
    }

  }

  openTrailerDialog(): void {

    if (this.trailers.length > 0) {
      this.dialog.open(YoutubePlayerComponent, {
        width: '5000px',
        data: { trailers: this.trailers }
      });
      console.log('Opening trailer dialog:', this.trailers);
    } else {
      alert('No trailers available for this movie.');
    }
  }
}



