import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontHomePageComponent } from './front-home-page.component';

describe('FrontHomePageComponent', () => {
  let component: FrontHomePageComponent;
  let fixture: ComponentFixture<FrontHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
