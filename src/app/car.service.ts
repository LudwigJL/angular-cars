import { Injectable } from '@angular/core';
import { Car } from './cars/model/car';
import { CARS } from './cars/data/cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = CARS;
  private currentId: number = this.cars.length;

  public getCarById(id: number | null): Car | null {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      return null;
    }
    return car;
  }

  public getAllCars(): Car[] {
    return this.cars;
  }

  public addCar(car: Car) {
    this.currentId++; // Get a new value each time we add a car
    this.cars.push({ ...car, id: this.currentId }); // Set that value in the object we push
  }
}
