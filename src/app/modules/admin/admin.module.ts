import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from 'src/app/store/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffect } from 'src/app/store/books.effect';
import { ChartModule } from 'angular-highcharts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BooksListComponent } from './Book/books-list/books-list.component';
import { AddBookComponent } from './Book/add-book/add-book.component';
import { EditBookComponent } from './Book/edit-category/edit-book.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AdminPageComponent,
    DashboardComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    BooksListComponent,
    AddBookComponent,
    EditBookComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSortModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('myBook', bookReducer),
    EffectsModule.forFeature([BooksEffect]),
    ChartModule,
    FontAwesomeModule,
  ],
})
export class AdminModule {}
