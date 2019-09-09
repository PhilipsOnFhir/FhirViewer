import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationDisplayComponent } from './annotation-display.component';

describe('AnnotationDisplayComponent', () => {
  let component: AnnotationDisplayComponent;
  let fixture: ComponentFixture<AnnotationDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotationDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotationDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
