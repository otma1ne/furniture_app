import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css'],
})
export class ScrollTopComponent {
  svgCode: SafeHtml = '';
  @Input() showScrollButton = false;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.http
      .get('assets/icons/Expand_upp.svg', { responseType: 'text' })
      .subscribe((svg: string) => {
        this.svgCode = this.sanitizer.bypassSecurityTrustHtml(svg);
      });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
