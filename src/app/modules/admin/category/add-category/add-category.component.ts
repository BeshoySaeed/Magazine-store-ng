import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent {
  bookForm: FormGroup;
  srcResult: any;
  formData!: FormData;
  constructor(
    private dialog: MatDialogRef<AddCategoryComponent>,
    private httpCategory: CategoryService,
    private route: Router
  ) {
    this.bookForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      active: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
    });
  }

  close() {
    this.dialog.close();
  }

  submit() {
    this.formData.append('name', this.bookForm.get('name')?.value);
    this.formData.append('active', this.bookForm.get('active')?.value);
    this.httpCategory.add(this.formData).subscribe((data) => {
      console.log(data);
      this.close();
    });
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
