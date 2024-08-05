import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { Routes } from '@angular/router';
import { BasketRoutingModule } from './basket-routing.module';
import { SharedModule } from '../shared/shared.module'

const routes: Routes = [
  { path: '', component: BasketComponent }
]
@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule,
    SharedModule
  ]

})
export class BasketModule { }
