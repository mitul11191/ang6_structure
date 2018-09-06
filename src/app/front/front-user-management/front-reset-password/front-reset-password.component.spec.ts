import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontResetPasswordComponent } from './front-reset-password.component';

describe('FrontResetPasswordComponent', () => {
  let component: FrontResetPasswordComponent;
  let fixture: ComponentFixture<FrontResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontResetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
