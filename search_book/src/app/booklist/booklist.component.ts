import { Component } from '@angular/core';
import { ExpectBook } from '../services/interfaces/book-interface';
import { BookService } from '../services/book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booklist',
  standalone: false,
  
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  booksup = new Subscription();
  books: ExpectBook[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.booksup = this.bookService.bookSubject$.subscribe(
      (val: ExpectBook[]) => {
        console.log('booklist: ', val);
        this.books = val;
      }
    );
  }
  ngOnDestroy(): void {
    this.booksup.unsubscribe();
  }

}
