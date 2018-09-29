import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AsyncSessionComponentComponent} from './async-session-component.component';

describe('AsyncSessionComponentComponent', () => {
  let component: AsyncSessionComponentComponent;
  let fixture: ComponentFixture<AsyncSessionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncSessionComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncSessionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
