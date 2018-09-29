import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleDisplayComponent } from './bundle-display.component';

describe('BundleDisplayComponent', () => {
  let component: BundleDisplayComponent;
  let fixture: ComponentFixture<BundleDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundleDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
