import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  displayedColumns: string[] = ['name', 'image', 'available', 'options'];
  trash: any;
  edit: any;
  dataSource = new MatTableDataSource<Category>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog) {
    this.trash = faTrash;
    this.edit = faEdit;
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

  openEdit() {
    this.dialog.open(EditCategoryComponent, {
      width: '40%',
      height: '500px',
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '400ms',
    });
  }
}

export interface PeriodicElement {
  name: string;
  image: string;
  available: number;
}

const ELEMENT_DATA: Category[] = [
  {
    name: 'Hydrogen',
    img: 'image-url',
    available: 2,
  },
  {
    name: 'Helium',
    img: 'image-url',
    available: 1,
  },
  // Add more data here...
];
