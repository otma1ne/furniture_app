import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { StarRatingModule } from 'angular-star-rating';
import { HttpClientModule } from '@angular/common/http';

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
import { BlogComponent } from './home/blog/blog.component';
import { DetailsComponent } from './details/details.component';
import { ScrollTopComponent } from './shared/scroll-top/scroll-top.component';
import { SidecartComponent } from './sidecart/sidecart.component';
import { OverlayComponent } from './shared/overlay/overlay.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { headerReducer } from './store/reducers/header.reducer';
import { LoaderComponent } from './shared/loader/loader.component';

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
    BlogComponent,
    DetailsComponent,
    ScrollTopComponent,
    SidecartComponent,
    OverlayComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    StarRatingModule.forRoot(),
    StoreModule.forRoot({ header: headerReducer }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
