import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveResourceComponent } from './retrieve-resource.component';

describe('RetrieveResourceComponent', () => {
  let component: RetrieveResourceComponent;
  let fixture: ComponentFixture<RetrieveResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
