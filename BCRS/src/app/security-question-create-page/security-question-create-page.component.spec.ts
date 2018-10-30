import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityQuestionCreatePageComponent } from './security-question-create-page.component';

describe('SecurityQuestionCreatePageComponent', () => {
  let component: SecurityQuestionCreatePageComponent;
  let fixture: ComponentFixture<SecurityQuestionCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityQuestionCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityQuestionCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
