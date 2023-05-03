import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.css'],
})
export class PrimaryBtnComponent {
  @Input() textBtn?: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onButtonClick = () => {
    this.onClick.emit();
  };
}
