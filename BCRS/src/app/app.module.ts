import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { UserManagementPageComponent } from './user-management-page/user-management-page.component';
import { SecurityQuestionPageComponent } from './security-question-page/security-question-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    UserManagementPageComponent,
    SecurityQuestionPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
