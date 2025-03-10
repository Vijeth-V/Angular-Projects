import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-list',
  standalone: false,

  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent {
  
  @Input() albums: Album[] = [];

}

export interface Album {
  artworkUrl100: string;
  collectionName: string;
}
