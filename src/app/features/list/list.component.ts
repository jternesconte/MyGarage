import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../shared/services/cars.service';
import { CarInterface } from '../../shared/interfaces/car';
import { MatDialog } from '@angular/material/dialog';
import { CarDialogComponent } from './car-dialog/car-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  cars: CarInterface[] = [];

  constructor(private carService: CarsService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.carService.getCarData().subscribe((cars) => (this.cars = cars));
  }

  addCar(newCar: CarInterface) {
    this.cars.push(newCar); // Adicione o novo carro à matriz local de carros
  }

  openDialog() {
    const dialogRef = this.dialog.open(CarDialogComponent, {
      width: '600px',
      data: {} as CarInterface,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cars.push(result);
      }
    });
  }
}
