import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupSampleComponent } from './lookup-sample.component';

describe('LookupSampleComponent', () => {
  let component: LookupSampleComponent;
  let fixture: ComponentFixture<LookupSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookupSampleComponent]
    });
    fixture = TestBed.createComponent(LookupSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
