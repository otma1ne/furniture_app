import { Component } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-new-design',
  templateUrl: './new-design.component.html',
  styleUrls: ['./new-design.component.css'],
})
export class NewDesignComponent {
  productsList: Array<Product> = [
    {
      id: '1',
      name: 'Teapot',
      price: 21.45,
      image: 'hummingbird-printed-t-shirt.jpg',
    },
    {
      id: '2',
      name: 'Miro dining table',
      price: 21.45,
      image: 'brown-bear-printed-sweater.jpg',
    },
    {
      id: '3',
      name: 'Janus table lamp',
      price: 29.0,
      image: 'the-best-is-yet-to-come-framed-poster.jpg',
    },
    {
      id: '4',
      name: 'Discus Floor and Table',
      price: 29.5,
      image: 'the-adventure-begins-framed-poster.jpg',
    },
  ];
}
