import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidecartComponent } from './sidecart.component';

describe('SidecartComponent', () => {
  let component: SidecartComponent;
  let fixture: ComponentFixture<SidecartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidecartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
