import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddBookComponent } from '../../Book/add-book/add-book.component';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent {
  bookForm: FormGroup;
  srcResult: any;
  constructor(private dialog: MatDialogRef<AddBookComponent>) {
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
