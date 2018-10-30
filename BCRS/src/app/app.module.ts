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
import { Browser } from 'protractor';
import { LogFilesPageComponent } from './log-files-page/log-files-page.component';
import { AccountRegistrationPageComponent } from './account-registration-page/account-registration-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { ServiceRepairPageComponent } from './service-repair-page/service-repair-page.component';
import { InvoiceSummaryPageComponent } from './invoice-summary-page/invoice-summary-page.component';
import { ProductStatisticsPageComponent } from './product-statistics-page/product-statistics-page.component';
import { SecurityQuestionCreatePageComponent } from './security-question-create-page/security-question-create-page.component';
import { SecurityQuestionReviewPageComponent } from './security-question-review-page/security-question-review-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    UserManagementPageComponent,
    LogFilesPageComponent,
    AccountRegistrationPageComponent,
    ForgotPasswordPageComponent,
    AboutUsPageComponent,
    ContactUsPageComponent,
    ServiceRepairPageComponent,
    InvoiceSummaryPageComponent,
    ProductStatisticsPageComponent,
    SecurityQuestionCreatePageComponent,
    SecurityQuestionReviewPageComponent
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
