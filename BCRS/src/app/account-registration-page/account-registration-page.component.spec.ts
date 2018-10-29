import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRegistrationPageComponent } from './account-registration-page.component';

describe('AccountRegistrationPageComponent', () => {
  let component: AccountRegistrationPageComponent;
  let fixture: ComponentFixture<AccountRegistrationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountRegistrationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
