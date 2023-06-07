import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { handleCartState } from 'src/app/store/actions/header.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showCart: boolean = false;
  header$: Observable<any>;

  constructor(private router: Router, private store: Store<{ header: any }>) {
    this.header$ = store.select('header');
    this.header$.subscribe((headerData) => {
      this.showCart = headerData.isCartOpen;
    });
  }

  naviagteToHome() {
    this.router.navigate(['/home']);
  }

  handleCartClick(state: boolean) {
    const body = document.querySelector('body');
    if (state) {
      this.store.dispatch(handleCartState({ state }));
      body!.style.overflow = 'hidden';
    } else {
      this.store.dispatch(handleCartState({ state }));
      body!.style.overflow = 'auto';
    }
  }
}
