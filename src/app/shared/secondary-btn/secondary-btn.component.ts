import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-btn',
  templateUrl: './secondary-btn.component.html',
  styleUrls: ['./secondary-btn.component.css'],
})
export class SecondaryBtnComponent {
  @Input() buttonText?: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  onButtonClick = () => {
    this.onClick.emit();
  };
}
