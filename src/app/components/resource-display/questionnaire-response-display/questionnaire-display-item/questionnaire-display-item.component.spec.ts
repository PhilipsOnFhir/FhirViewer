import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireDisplayItemComponent } from './questionnaire-display-item.component';

describe('QuestionnaireDisplayItemComponent', () => {
  let component: QuestionnaireDisplayItemComponent;
  let fixture: ComponentFixture<QuestionnaireDisplayItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireDisplayItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireDisplayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
