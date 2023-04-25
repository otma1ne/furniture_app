import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './home/hero/hero.component';
import { PrimaryBtnComponent } from './shared/primary-btn/primary-btn.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { TrendingComponent } from './home/trending/trending.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { NewDesignComponent } from './home/new-design/new-design.component';
import { BannerComponent } from './home/banner/banner.component';
import { SecondaryBtnComponent } from './shared/secondary-btn/secondary-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    ShopComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    PrimaryBtnComponent,
    CategoriesComponent,
    TrendingComponent,
    ProductCardComponent,
    NewDesignComponent,
    BannerComponent,
    SecondaryBtnComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
