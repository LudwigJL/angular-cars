import { Component, inject } from '@angular/core';
import { CarService } from '../../car.service';
import { Car } from '../model/car';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  carService = inject(CarService);

  cars: Car[] = this.carService.getAllCars();
}
