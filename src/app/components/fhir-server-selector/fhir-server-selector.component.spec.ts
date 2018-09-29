import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FhirServerSelectorComponent } from './fhir-server-selector.component';

describe('FhirServerSelectorComponent', () => {
  let component: FhirServerSelectorComponent;
  let fixture: ComponentFixture<FhirServerSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FhirServerSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FhirServerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
