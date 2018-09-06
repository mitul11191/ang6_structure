import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontBreadcrumComponent } from './front-breadcrum.component';

describe('FrontBreadcrumComponent', () => {
  let component: FrontBreadcrumComponent;
  let fixture: ComponentFixture<FrontBreadcrumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontBreadcrumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontBreadcrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
