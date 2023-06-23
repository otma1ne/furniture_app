import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product?: Product;

  constructor(private route: Router) {}

  navigateToDetails() {
    this.route.navigate(['/details/' + this.product?.id]);
  }
}
