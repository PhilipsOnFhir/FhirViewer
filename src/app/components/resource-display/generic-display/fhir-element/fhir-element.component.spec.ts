import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FhirElementComponent } from './fhir-element.component';

describe('FhirElementComponent', () => {
  let component: FhirElementComponent;
  let fixture: ComponentFixture<FhirElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FhirElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FhirElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
