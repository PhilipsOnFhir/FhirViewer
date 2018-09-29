import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareplayActivityDisplayComponent } from './careplan-activity-display.component';

describe('CareplanActivityDisplayComponent', () => {
  let component: CareplayActivityDisplayComponent;
  let fixture: ComponentFixture<CareplayActivityDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareplayActivityDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareplayActivityDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
