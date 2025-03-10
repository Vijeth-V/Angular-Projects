import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ItuneServiceService {

  private apiUrl = 'https://itunes.apple.com/search';

  constructor(private http: HttpClient) {}

  searchAlbums(artistName: string): Observable<any> {
    const url = `${this.apiUrl}?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=200`;
    return this.http.get<any>(url);
  }
}
