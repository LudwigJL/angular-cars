import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { TestsComponent } from './tests/tests.component';
import { RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddComponent,
    ViewComponent,
    ListComponent,
    TestsComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    AddComponent,
    ViewComponent,
    ListComponent,
    EditComponent,
  ]
})
export class CarsModule { }
