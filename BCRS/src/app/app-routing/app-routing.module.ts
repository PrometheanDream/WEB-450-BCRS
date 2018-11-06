import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from '../sign-in-page/sign-in-page.component';
import { SecurityQuestionCreatePageComponent } from '../security-question-create-page/security-question-create-page.component';
import { SecurityQuestionReviewPageComponent } from '../security-question-review-page/security-question-review-page.component';
import { UserManagementPageComponent } from '../user-management-page/user-management-page.component';
import { AboutUsPageComponent } from '../about-us-page/about-us-page.component';
import { ContactUsPageComponent } from '../contact-us-page/contact-us-page.component';
import { AccountRegistrationPageComponent } from '../account-registration-page/account-registration-page.component';
import { ForgotPasswordPageComponent } from '../forgot-password-page/forgot-password-page.component';
import { InvoiceSummaryPageComponent } from '../invoice-summary-page/invoice-summary-page.component';
import { LogFilesPageComponent } from '../log-files-page/log-files-page.component';
import { ProductStatisticsPageComponent } from '../product-statistics-page/product-statistics-page.component';

const appRoutes: Routes = [

{ path: '', component: SignInPageComponent },
{ path: 'about-us', component: AboutUsPageComponent },
{ path: 'account-registration', component: AccountRegistrationPageComponent },
{ path: 'contact-us', component: ContactUsPageComponent },
{ path: 'forgot-password', component: ForgotPasswordPageComponent },
{ path: 'invoice-summary', component: InvoiceSummaryPageComponent },
{ path: 'log-files', component: LogFilesPageComponent },
{ path: 'product-stats', component: ProductStatisticsPageComponent },
{ path: 'security-questions-create', component: SecurityQuestionCreatePageComponent },
{ path: 'security-questions-review', component: SecurityQuestionReviewPageComponent },
{ path: 'sign-in', component: SignInPageComponent },
{ path: 'user-management', component: UserManagementPageComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { useHash: true, enableTracing : true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
