import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationOutcomeDisplayComponent } from './operation-outcome-display.component';

describe('OperationOutcomeDisplayComponent', () => {
  let component: OperationOutcomeDisplayComponent;
  let fixture: ComponentFixture<OperationOutcomeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationOutcomeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationOutcomeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
