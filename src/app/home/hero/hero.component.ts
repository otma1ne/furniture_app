import { Component } from '@angular/core';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';

SwiperCore.use([Autoplay, EffectFade]);

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {}
