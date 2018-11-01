import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
// import {FormControl, Validators} from '@angular/forms';
import { MatCard} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';




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
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatCardModule, } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { SideNavComponent } from './side-nav/side-nav.component';

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
    SecurityQuestionReviewPageComponent,
    SideNavComponent
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
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
