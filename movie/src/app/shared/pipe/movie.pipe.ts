import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movie',
  standalone: false
})
export class MoviePipe implements PipeTransform {

  transform(value: string, maxlength: number): string {
    return value.length > maxlength ? value.substring(0, maxlength) + '...' : value;
  }

}
