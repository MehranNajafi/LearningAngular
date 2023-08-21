import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoincricleComponent } from './twoincricle.component';

describe('TwoincricleComponent', () => {
  let component: TwoincricleComponent;
  let fixture: ComponentFixture<TwoincricleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoincricleComponent]
    });
    fixture = TestBed.createComponent(TwoincricleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
