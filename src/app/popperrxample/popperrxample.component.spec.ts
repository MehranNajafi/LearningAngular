import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopperrxampleComponent } from './popperrxample.component';

describe('PopperrxampleComponent', () => {
  let component: PopperrxampleComponent;
  let fixture: ComponentFixture<PopperrxampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopperrxampleComponent]
    });
    fixture = TestBed.createComponent(PopperrxampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
