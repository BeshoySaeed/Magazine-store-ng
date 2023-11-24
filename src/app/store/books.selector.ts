import { createFeatureSelector } from '@ngrx/store';
import { Book } from '../models/book';

export const selectBooks = createFeatureSelector<Book[]>('myBook');
