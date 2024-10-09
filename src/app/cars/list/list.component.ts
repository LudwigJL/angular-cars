import { Component, inject } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../model/car';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  carService = inject(CarService);

  cars: Observable<Car[]> = this.carService.getAllCars();
}
