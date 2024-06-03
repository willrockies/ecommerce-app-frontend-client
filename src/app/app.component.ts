import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './shared/models/product';
import { Pagination } from './shared/models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  products: Product[] = [];
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>('https://localhost:5001/api/products?pageSize=50').subscribe(
      {
        next: (response) => this.products = response.data, //console.log(response), // what to do next
        error: error => console.log(error),
        complete: () => {
          console.log('requested complete');
          console.log('extra statement');

        }
      }
    )
  }
}
