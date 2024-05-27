import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CarInterface } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private apiUrl = 'http://localhost:3000/cars'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<CarInterface[]>(this.apiUrl);
  }
}
