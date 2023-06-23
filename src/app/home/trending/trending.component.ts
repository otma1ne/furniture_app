import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent {
  isLoading = true;
  error: string = '';

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  productsList: Product[] = [];

  ngOnInit() {
    this.productsService
      .getTrendingProduct()
      .pipe(
        catchError((err) => {
          this.isLoading = false;
          this.error = err;
          return throwError(err);
        })
      )
      .subscribe((products) => {
        console.log(products);
        this.isLoading = false;
        this.productsList = products;
      });
  }

  navigateToShop() {
    this.router.navigate(['/shop']);
  }
}
