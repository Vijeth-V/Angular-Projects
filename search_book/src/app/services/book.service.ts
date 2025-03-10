import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, Subject, tap } from 'rxjs';
import { BookRes, ExpectBook, ItemsEntity } from './interfaces/book-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  bookSubject$ = new Subject<ExpectBook[]>();
  wishList: string[] = [];
  wishListSubject$ = new Subject<string[]>();

  constructor(private http: HttpClient) { }

  getBooks(name: string) {
    return this.http.get<BookRes>(this.baseUrl + name).pipe(
      map((res: BookRes) => {
        return (
          res.items
            ?.filter(({ volumeInfo: info }: ItemsEntity) => {
              return (
                !!info.title &&
                !!info.authors &&
                !!info.imageLinks?.thumbnail &&
                !!info.publisher &&
                !!info.publishedDate &&
                !!info.description
              );
            })
            .map(({ volumeInfo: info }: ItemsEntity) => {
              return {
                bookName: info.title,
                bookPic: info.imageLinks?.thumbnail,
                publisher: info.publisher,
                publishDate: info.publishedDate,
                description: info.description,
                author: info.authors ? info.authors.join(', ') : 'Unknown Author',
              } as ExpectBook;
            }) || []
        );
      }),
      tap((books: ExpectBook[]) => {
        this.bookSubject$.next(books);
      }),
      catchError((err) => {
        console.error(err);
        this.bookSubject$.next([]);
        return of([]);
      })
    );
  }

  addToWishList(book: ExpectBook) {
    if (!this.wishList.includes(book.bookName)) {
      this.wishList.push(book.bookName);
      this.wishListSubject$.next(this.wishList);
    }
  }

  removeFromWishlist(book: string) {
    this.wishList = this.wishList.filter((b) => b !== book);
    this.wishListSubject$.next(this.wishList);
  }
}
