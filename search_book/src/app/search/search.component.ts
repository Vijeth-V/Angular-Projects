import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { ExpectBook } from '../services/interfaces/book-interface';

@Component({
  selector: 'app-search',
  standalone: false,

  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  bookName: string = '';
  books: ExpectBook[] = [];
  errorMessage: string = '';

  constructor(private bookService: BookService) {}

  onSearch() {

    if (!this.bookName || this.bookName.trim() === '') {
      this.errorMessage = 'Please Enter a Book Name to search!';
      return;
    }

    this.errorMessage = '';
    this.bookService.getBooks(this.bookName).subscribe();
  }
}


