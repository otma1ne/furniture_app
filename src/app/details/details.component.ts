import { Component, ViewChild } from '@angular/core';
import SwiperCore, { Swiper, Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Virtual]);

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
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
