import { createReducer, on } from '@ngrx/store';
import { booksFetchAPISuccess } from './books.action';
import { Book } from '../models/book';

export const initialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  initialState,
  on(booksFetchAPISuccess, (state, { allBooks }) => {
    return allBooks;
  })
);
