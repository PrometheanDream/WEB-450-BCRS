import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityQuestionnaireComponent } from './security-questionnaire.component';

describe('SecurityQuestionnaireComponent', () => {
  let component: SecurityQuestionnaireComponent;
  let fixture: ComponentFixture<SecurityQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
