import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceDisplayLoaderComponent } from './resource-display-loader.component';

describe('ResourceDisplayLoaderComponent', () => {
  let component: ResourceDisplayLoaderComponent;
  let fixture: ComponentFixture<ResourceDisplayLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceDisplayLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceDisplayLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
