import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { RouterModule, Routes } from '@angular/router';
import { BasketRoutingModule } from './basket-routing.module';


const routes: Routes = [
  { path: '', component: BasketComponent }
]
@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule
  ]

})
export class BasketModule { }
