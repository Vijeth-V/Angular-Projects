import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-youtube-player',
  standalone: false,
  
  templateUrl: './youtube-player.component.html',
  styleUrl: './youtube-player.component.css'
})
export class YoutubePlayerComponent {

  trailers: { key: string; name: string }[] = [];
  currentTrailerIndex: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { trailers: { key: string; name: string }[] }) {
    this.trailers = data.trailers;
  }

  get currentTrailerKey(): string {
    return this.trailers[this.currentTrailerIndex]?.key;
  }

  goToNextTrailer(): void {
    if (this.currentTrailerIndex < this.trailers.length - 1) {
      this.currentTrailerIndex++;
    }
  }

  goToPreviousTrailer(): void {
    if (this.currentTrailerIndex > 0) {
      this.currentTrailerIndex--;
    }
  }
  
}
