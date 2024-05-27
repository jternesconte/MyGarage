import { ResolveFn } from '@angular/router';
import { CarsService } from '../services/cars.service';
import { inject } from '@angular/core';

export const getCarsResolver = () => {
  const carService = inject(CarsService);
  return carService.getAll();
};
