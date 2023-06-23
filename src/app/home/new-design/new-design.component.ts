import { Component } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-new-design',
  templateUrl: './new-design.component.html',
  styleUrls: ['./new-design.component.css'],
})
export class NewDesignComponent {
  isLoading: boolean = true;
  error: string = '';
  constructor(private productsService: ProductsService) {}

  productsList: Product[] = [];

  ngOnInit() {
    this.productsService
      .getNewDesign()
      .pipe(
        catchError((err) => {
          this.isLoading = false;
          return throwError(err);
        })
      )
      .subscribe((products) => {
        this.productsList = products;
      });
  }
}
