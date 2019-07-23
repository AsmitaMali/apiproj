import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceResultsComponent } from './service-results.component';

describe('ServiceResultsComponent', () => {
  let component: ServiceResultsComponent;
  let fixture: ComponentFixture<ServiceResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
