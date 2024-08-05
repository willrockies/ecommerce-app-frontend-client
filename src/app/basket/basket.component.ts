import { BasketService } from 'src/app/basket/basket.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  constructor(public basketService: BasketService) { }
}
