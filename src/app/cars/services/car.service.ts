import { inject, Injectable } from '@angular/core';
import { Car } from '../model/car';
import { CARS } from '../data/cars';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  //private cars: Car[] = CARS;
  //private currentId: number = this.cars.length;
  private httpClient = inject(HttpClient)

  public getCarById(id: any | null): Observable<Car> {
    return this.httpClient.get<Car>(`http://localhost:3000/cars/${id}`)

  }

  public getAllCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>("http://localhost:3000/cars")
  }

  public addCar(car: Car) {
    //this.currentId++; // Get a new value each time we add a car
    //this.cars.push({ ...car, id: this.currentId }); // Set that value in the object we push
  }
}
