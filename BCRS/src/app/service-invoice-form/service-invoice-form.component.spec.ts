import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInvoiceFormComponent } from './service-invoice-form.component';

describe('ServiceInvoiceFormComponent', () => {
  let component: ServiceInvoiceFormComponent;
  let fixture: ComponentFixture<ServiceInvoiceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceInvoiceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInvoiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
