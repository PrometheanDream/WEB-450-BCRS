import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSummaryPageComponent } from './invoice-summary-page.component';

describe('InvoiceSummaryPageComponent', () => {
  let component: InvoiceSummaryPageComponent;
  let fixture: ComponentFixture<InvoiceSummaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceSummaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
