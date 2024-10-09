import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from '../model/car';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})

export class AddComponent {
  carForm: FormGroup;
  formBuilder = inject(FormBuilder)
  carService = inject(CarService)
  router = inject(Router)

  myCar: Car = {id: 0, make: '', model: '', description: ''}

  constructor() {
    this.carForm = this.formBuilder.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addCar() {
    this.myCar.make = this.carForm.value.make,
    this.myCar.model = this.carForm.value.model,
    this.myCar.description = this.carForm.value.description
    
    this.carService.addCar(this.myCar)
    this.router.navigate(['cars'])
  }
}

