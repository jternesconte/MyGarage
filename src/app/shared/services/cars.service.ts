import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CarInterface } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/cars'


  getCarData() {
    return this.http.get<CarInterface>(this.apiUrl);
  }
}
