import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDesignComponent } from './new-design.component';

describe('NewDesignComponent', () => {
  let component: NewDesignComponent;
  let fixture: ComponentFixture<NewDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
