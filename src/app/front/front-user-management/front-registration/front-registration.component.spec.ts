import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontRegistrationComponent } from './front-registration.component';

describe('FrontRegistrationComponent', () => {
  let component: FrontRegistrationComponent;
  let fixture: ComponentFixture<FrontRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
