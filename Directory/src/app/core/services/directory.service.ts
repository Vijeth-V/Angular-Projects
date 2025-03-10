import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  private baseurl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  fetchUser(): Observable<any>{
    return this.http.get(this.baseurl);
  }
}
