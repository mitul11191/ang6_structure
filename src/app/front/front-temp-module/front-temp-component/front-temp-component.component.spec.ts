import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontTempComponentComponent } from './front-temp-component.component';

describe('FrontTempComponentComponent', () => {
  let component: FrontTempComponentComponent;
  let fixture: ComponentFixture<FrontTempComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontTempComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontTempComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
