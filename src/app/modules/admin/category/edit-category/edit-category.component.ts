import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent {
  bookForm: FormGroup;
  srcResult: any;
  constructor(private dialog: MatDialogRef<AddCategoryComponent>) {
    this.bookForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      available: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
    });
  }

  close() {
    this.dialog.close();
  }

  submit() {
    console.log(this.bookForm.errors);
  }

  onFileSelected() {
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
