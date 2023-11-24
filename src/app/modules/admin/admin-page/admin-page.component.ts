import { Store, select } from '@ngrx/store';
import { BookService } from './../../../services/book/book.service';
import { Component } from '@angular/core';
import { selectBooks } from 'src/app/store/books.selector';
import { invokeBooksAPI } from 'src/app/store/books.action';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  // books$: any = this.store.pipe(select(selectBooks));

  constructor(private BookService: BookService, private store: Store) {}
  ngOnInit() {
    this.BookService.fetchAll().subscribe((res) => console.log(res));
    // this.store.dispatch(invokeBooksAPI());
  }

  // ngAfterViewInit() {
  //   console.log(this.books$);
  // }
}
