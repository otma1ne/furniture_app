import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
})
export class OverlayComponent {
  @Input() isActive: boolean = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  overlayClick() {
    this.onClick.emit();
  }
}
