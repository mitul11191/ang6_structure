import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispValidationComponent } from './disp-validation.component';

describe('DispValidationComponent', () => {
  let component: DispValidationComponent;
  let fixture: ComponentFixture<DispValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
