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
      id: [data.id],
      title: [data.title],
      category: [data.category],
      image: [data.image],
      km: [data.km],
      engine: [data.engine],
      color: [data.color],
      year: [data.year],
      condition: [data.condition],
      price: [data.price]
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
