import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSelectorFilterComponent } from './resource-selector-filter.component';

describe('ResourceSelectorFilterComponent', () => {
  let component: ResourceSelectorFilterComponent;
  let fixture: ComponentFixture<ResourceSelectorFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceSelectorFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceSelectorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
