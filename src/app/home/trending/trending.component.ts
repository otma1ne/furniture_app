import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent {
  constructor(private router: Router) {}

  productsList: Array<Product> = [
    {
      id: '1',
      name: 'Teapot',
      price: 21.45,
      image: ['hummingbird-printed-t-shirt.jpg'],
    },
    {
      id: '2',
      name: 'Miro dining table',
      price: 21.45,
      image: ['brown-bear-printed-sweater.jpg'],
    },
    {
      id: '3',
      name: 'Janus table lamp',
      price: 29.0,
      image: ['the-best-is-yet-to-come-framed-poster.jpg'],
    },
    {
      id: '4',
      name: 'Discus Floor and Table',
      price: 29.5,
      image: ['the-adventure-begins-framed-poster.jpg'],
    },
  ];

  navigateToShop() {
    this.router.navigate(['/shop']);
  }
}
