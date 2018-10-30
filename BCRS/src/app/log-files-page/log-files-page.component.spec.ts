import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogFilesPageComponent } from './log-files-page.component';

describe('LogFilesPageComponent', () => {
  let component: LogFilesPageComponent;
  let fixture: ComponentFixture<LogFilesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogFilesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogFilesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
