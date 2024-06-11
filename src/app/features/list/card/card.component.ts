import { Component, OnInit } from '@angular/core';

import { CarInterface } from '../../../shared/interfaces/car';
import { CarsService } from '../../../shared/services/cars.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  car: CarInterface | null = null;

  constructor(private carService: CarsService) {}

  ngOnInit() {
    this.carService.getCarData()
      .subscribe(car => this.car = car);
      console.log(this.car)
  }

}
