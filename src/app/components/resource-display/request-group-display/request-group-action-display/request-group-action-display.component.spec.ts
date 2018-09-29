import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestGroupActionDisplayComponent } from './request-group-action-display.component';

describe('RequestGroupActionDisplayComponent', () => {
  let component: RequestGroupActionDisplayComponent;
  let fixture: ComponentFixture<RequestGroupActionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestGroupActionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestGroupActionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
