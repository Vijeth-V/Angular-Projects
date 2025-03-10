import { Component } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-wish-list',
  standalone: false,
  
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  wishlist: string[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.wishListSubject$.subscribe(
      (wishlist) => (this.wishlist = wishlist)
    );
  }

  removeFromWishlist(book: string) {
    this.bookService.removeFromWishlist(book);
  }

}
