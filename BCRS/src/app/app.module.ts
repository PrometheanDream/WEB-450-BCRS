import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
// import {FormControl, Validators} from '@angular/forms';
import {MatCardModule, MatCard} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


import { AppComponent } from './app.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { UserManagementPageComponent } from './user-management-page/user-management-page.component';
import { SecurityQuestionPageComponent } from './security-question-page/security-question-page.component';
import { Browser } from 'protractor';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    UserManagementPageComponent,
    SecurityQuestionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    // FormControl,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatRadioModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
