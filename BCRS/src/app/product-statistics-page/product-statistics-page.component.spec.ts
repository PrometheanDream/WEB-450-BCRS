import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStatisticsPageComponent } from './product-statistics-page.component';

describe('ProductStatisticsPageComponent', () => {
  let component: ProductStatisticsPageComponent;
  let fixture: ComponentFixture<ProductStatisticsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductStatisticsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStatisticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
