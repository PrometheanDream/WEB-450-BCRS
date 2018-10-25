import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityQuestionPageComponent } from './security-question-page.component';

describe('SecurityQuestionPageComponent', () => {
  let component: SecurityQuestionPageComponent;
  let fixture: ComponentFixture<SecurityQuestionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityQuestionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityQuestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
