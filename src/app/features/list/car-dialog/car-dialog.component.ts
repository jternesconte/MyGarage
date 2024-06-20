import { Component, Inject } from '@angular/core';
import { CarInterface } from '../../../shared/interfaces/car';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-car-dialog',
  templateUrl: './car-dialog.component.html',
  styleUrl: './car-dialog.component.css'
})
export class CarDialogComponent {
  form: FormGroup;
  imageSrc: string | ArrayBuffer | null = '';

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CarInterface
  ) {
    this.form = this.formBuilder.group({
      id: [data.id, Validators.required],
      title: [data.title, Validators.required],
      category: [data.category, Validators.required],
      image: [data.image, Validators.required],
      km: [data.km, Validators.required],
      engine: [data.engine, Validators.required],
      color: [data.color, Validators.required],
      year: [data.year, Validators.required],
      condition: [data.condition, Validators.required],
      price: [data.price, Validators.required]
    });
    this.imageSrc = data.image;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;
        this.form.patchValue({ image: this.imageSrc });
      };
      reader.readAsDataURL(file);
    }
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
