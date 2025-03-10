import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { catchError, debounceTime, map, Observable, of, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService {

  constructor(private readonly http: HttpClient) { }

  hasEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {

      const email = control.value;
      return this.http
        .post('http://localhost:5566/api/v1/auth/check-email', { email })
        .pipe(
          debounceTime(100),
          switchMap(() => {
            return this.http.post('http://localhost:5566/api/v1/auth/check-email', { email })
          }),
          map((result: any) => {
            console.log(result);
            return result ? { hasEmail: true } : null;
          }),
          take(1)
        );
    };
  }

}
