import { Component, OnInit } from '@angular/core';

import { CarInterface } from '../../../shared/interfaces/car';
import { CarsService } from '../../../shared/services/cars.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  cars: CarInterface[] = [];

  constructor(private carService: CarsService) {}

  ngOnInit() {
    this.getCars()
  }

  getCars() {
    this.carService.getCarData()
      .subscribe(cars => this.cars = cars);
  }

}
