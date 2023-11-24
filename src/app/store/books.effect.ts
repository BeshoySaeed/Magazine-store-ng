import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, Observable, map, mergeMap, withLatestFrom } from 'rxjs';
import { booksFetchAPISuccess, invokeBooksAPI } from './books.action';
import { selectBooks } from './books.selector';
import { BookService } from '../services/book/book.service';
import { Book } from '../models/book';

@Injectable()
export class BooksEffect {
  constructor(
    private actions$: Actions,
    private booksService: BookService,
    private store: Store
  ) {}

  loadAllBooks$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(invokeBooksAPI),
      withLatestFrom(this.store.pipe(select(selectBooks))),
      mergeMap(([, bookformStore]) => {
        if (bookformStore.length > 0) {
          return EMPTY;
        }
        return this.booksService
          .fetchAll()
          .pipe(
            map((data: Book[]) => booksFetchAPISuccess({ allBooks: data }))
          );
      })
    )
  );
}
