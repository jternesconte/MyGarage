import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CarInterface } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<CarInterface[]>('/api/cars');
  }
  constructor() { }
}
