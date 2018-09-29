import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureDisplayComponent } from './measure-display.component';

describe('MeasureDisplayComponent', () => {
  let component: MeasureDisplayComponent;
  let fixture: ComponentFixture<MeasureDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasureDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasureDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
