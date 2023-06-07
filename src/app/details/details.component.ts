import { Component, ViewChild } from '@angular/core';
import SwiperCore, { Swiper, Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Product } from '../shared/models/product';

SwiperCore.use([Virtual]);

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  product?: Product;
  isLoading: boolean = true;
  error: string = '';

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const productId = params['id'];
      this.productService
        .getProduct(productId)
        .pipe(
          catchError((err) => {
            this.isLoading = false;
            this.error = 'An error occurred while fetching the products.';
            return throwError(err);
          })
        )
        .subscribe((product) => {
          this.product = product;
          console.log(this.product);
          this.isLoading = false;
        });
    });
  }

  slideToIndex(index: number) {
    this.swiper?.swiperRef.slideTo(index);
  }
  quantity: number = 1;

  incrementQuantity() {
    if (this.quantity < 10) this.quantity = this.quantity + 1;
  }

  decrementQuantity() {
    if (this.quantity > 1) this.quantity = this.quantity - 1;
  }
}
