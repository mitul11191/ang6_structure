import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontForgotPasswordComponent } from './front-forgot-password.component';

describe('FrontForgotPasswordComponent', () => {
  let component: FrontForgotPasswordComponent;
  let fixture: ComponentFixture<FrontForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
