import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'furniture_app';

  showScrollButton: boolean = false;

  ngOnInit() {
    window.addEventListener('scroll', this.scrollHandler.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollHandler.bind(this));
  }

  @HostListener('window:scroll')
  scrollHandler() {
    if (window.pageYOffset > 200) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }
}
