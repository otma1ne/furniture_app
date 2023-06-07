import { Component } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductsService } from '../services/products.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  productsList: Product[] = [];
  isLoading = true;
  error: string = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService
      .getProducts()
      .pipe(
        catchError((error) => {
          this.isLoading = false;
          this.error = 'An error occurred while fetching the products.';
          return throwError(error);
        })
      )
      .subscribe((products) => {
        this.productsList = products;
        this.isLoading = false;
      });
  }
}
