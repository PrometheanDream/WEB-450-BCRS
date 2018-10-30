import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityQuestionReviewPageComponent } from './security-question-review-page.component';

describe('SecurityQuestionReviewPageComponent', () => {
  let component: SecurityQuestionReviewPageComponent;
  let fixture: ComponentFixture<SecurityQuestionReviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityQuestionReviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityQuestionReviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
