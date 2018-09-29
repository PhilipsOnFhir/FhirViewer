import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareplanDisplayComponent } from './careplan-display.component';

describe('CareplanDisplayComponent', () => {
  let component: CareplanDisplayComponent;
  let fixture: ComponentFixture<CareplanDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareplanDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareplanDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
