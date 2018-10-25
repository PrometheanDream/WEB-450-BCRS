import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from '../sign-in-page/sign-in-page.component';
import { SecurityQuestionPageComponent } from '../security-question-page/security-question-page.component';
import { UserManagementPageComponent } from '../user-management-page/user-management-page.component';



const appRoutes: Routes = [

{ path: '', component: SignInPageComponent },
{ path: 'sign-in', component: SignInPageComponent },
{ path: 'security-questions-create', component: SecurityQuestionPageComponent },
{ path: 'user-management', component: UserManagementPageComponent }


];










@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { useHash: true, enableTracing : true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
