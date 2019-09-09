import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDisplayElementComponent } from './generic-display-element.component';

describe('GenericDisplayElementComponent', () => {
  let component: GenericDisplayElementComponent;
  let fixture: ComponentFixture<GenericDisplayElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericDisplayElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDisplayElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
