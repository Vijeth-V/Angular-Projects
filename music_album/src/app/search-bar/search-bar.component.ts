import { Component, EventEmitter, Output } from '@angular/core';
import { ItuneServiceService } from '../services/itune-service.service';
@Component({
  selector: 'app-search-bar',
  standalone: false,

  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Output() artistSearch = new EventEmitter<string>();
  showSearchInfo: boolean = true;
  isFocused: boolean = false;

  searchArtist(event: any) {
    const artistName = event.target.value;
    this.artistSearch.emit(artistName);
    this.showSearchInfo = false;
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }
}
