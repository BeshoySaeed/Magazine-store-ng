import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { BooksListComponent } from './Book/books-list/books-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },

      {
        path: 'category',
        component: CategoryListComponent,
      },
      {
        path: 'book',
        component: BooksListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
