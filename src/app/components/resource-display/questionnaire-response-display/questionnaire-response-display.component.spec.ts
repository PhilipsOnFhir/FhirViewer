import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireResponseDisplayComponent } from './questionnaire-response-display.component';

describe('QuestionnaireResponseDisplayComponent', () => {
  let component: QuestionnaireResponseDisplayComponent;
  let fixture: ComponentFixture<QuestionnaireResponseDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireResponseDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireResponseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
