import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnRxjsOneComponent } from './learn-rxjs-one.component';

describe('LearnRxjsOneComponent', () => {
  let component: LearnRxjsOneComponent;
  let fixture: ComponentFixture<LearnRxjsOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnRxjsOneComponent]
    });
    fixture = TestBed.createComponent(LearnRxjsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
