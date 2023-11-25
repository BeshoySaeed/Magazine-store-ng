import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  displayedColumns: string[] = ['name', 'image', 'active', 'options'];
  trash: any;
  edit: any;
  categories!: Category[];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private httpCategory: CategoryService
  ) {
    this.trash = faTrash;
    this.edit = faEdit;
  }

  ngOnInit() {
    this.httpCategory.fetchAll().subscribe((data) => {
      this.categories = data.data;
      console.log(this.categories);
      this.dataSource = new MatTableDataSource<Category>(this.categories);
    });
  }

  delete(id: number) {
    this.httpCategory.delete(id).subscribe((data) => console.log(data));

    this.categories = this.categories.filter((c) => {
      c.id != id;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openAdd() {
    this.dialog.open(AddCategoryComponent, {
      width: '40%',
      height: '500px',
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '400ms',
    });
  }

  openEdit(id: number) {
    this.dialog.open(EditCategoryComponent, {
      width: '40%',
      height: '500px',
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '400ms',
      data: [
        {
          id: id,
        },
      ],
    });
  }
}
