import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidecart',
  templateUrl: './sidecart.component.html',
  styleUrls: ['./sidecart.component.css'],
})
export class SidecartComponent {
  @Input() isActive: boolean = false;
}
