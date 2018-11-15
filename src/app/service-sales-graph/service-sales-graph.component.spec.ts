import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSalesGraphComponent } from './service-sales-graph.component';

describe('ServiceSalesGraphComponent', () => {
  let component: ServiceSalesGraphComponent;
  let fixture: ComponentFixture<ServiceSalesGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSalesGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSalesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
