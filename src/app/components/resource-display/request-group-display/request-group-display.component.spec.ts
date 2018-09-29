import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestGroupDisplayComponent } from './request-group-display.component';

describe('RequestGroupDisplayComponent', () => {
  let component: RequestGroupDisplayComponent;
  let fixture: ComponentFixture<RequestGroupDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestGroupDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestGroupDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
