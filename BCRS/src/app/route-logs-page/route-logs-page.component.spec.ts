import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteLogsPageComponent } from './route-logs-page.component';

describe('RouteLogsPageComponent', () => {
  let component: RouteLogsPageComponent;
  let fixture: ComponentFixture<RouteLogsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteLogsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteLogsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
