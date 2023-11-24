import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookListComponent } from './Book/book-list/book-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';

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
        path: 'book',
        component: BookListComponent,
      },
      {
        path: 'category',
        component: CategoryListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
