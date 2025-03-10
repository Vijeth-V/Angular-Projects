import { Component, Input } from '@angular/core';
import { ExpectBook } from '../services/interfaces/book-interface';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-item',
  standalone: false,
  
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  @Input() book!: ExpectBook;

  constructor(private bookService: BookService) {}

  addToWishlist() {
    this.bookService.addToWishList(this.book);
  }

}
