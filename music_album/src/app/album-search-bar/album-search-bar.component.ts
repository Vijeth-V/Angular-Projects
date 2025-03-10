import { Component } from '@angular/core';
import { ItuneServiceService } from '../services/itune-service.service';
@Component({
  selector: 'app-album-search-bar',
  standalone: false,

  templateUrl: './album-search-bar.component.html',
  styleUrl: './album-search-bar.component.css'
})
export class AlbumSearchBarComponent {
  albums: any[] = [];
  searchTerm: string = '';

  constructor(private iTunesService: ItuneServiceService) { }

  onArtistSearch(artistName: string) {
    this.searchTerm = artistName;
    this.iTunesService.searchAlbums(artistName).subscribe((data: any) => {
      this.albums = data.results;
    });
  }
}
