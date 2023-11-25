import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent {
  bookForm: FormGroup;
  srcResult: any;
  categoryId!: number;
  category!: Category;
  formData!: FormData;
  name: any;
  active: any;
  img: any;
  constructor(
    private dialog: MatDialogRef<AddCategoryComponent>,
    private httpCategory: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.bookForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      active: new FormControl('', [Validators.required]),
      img: new FormControl('', []),
    });
    this.formData = new FormData();
  }

  ngOnInit() {
    this.categoryId = this.data[0].id;
    this.httpCategory.fetchById(this.categoryId).subscribe((data) => {
      this.category = data.data;
      this.bookForm.patchValue({
        name: this.category.name,
        active: this.category.active == 1 ? 'true' : 'false',
        img: this.category.img,
      });
    });
  }

  close() {
    this.dialog.close();
  }

  submit() {
    this.formData.append('name', this.name);
    this.formData.append('active', this.active);
    console.log(this.name, this.active, this.category.img);
    if (this.formData.get('img')) {
      this.httpCategory
        .update(this.categoryId, this.formData)
        .subscribe((data) => {
          console.log(data);
          this.close();
        });
    } else {
      this.httpCategory
        .update(this.categoryId, {
          name: this.name,
          active: this.active,
          img: this.category.img,
        })
        .subscribe((data) => {
          console.log(data);
          this.close();
        });
    }
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.formData = new FormData();
    this.formData.append('img', file);
    const inputNode: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
}
