import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRepairPageComponent } from './service-repair-page.component';

describe('ServiceRepairPageComponent', () => {
  let component: ServiceRepairPageComponent;
  let fixture: ComponentFixture<ServiceRepairPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceRepairPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRepairPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
