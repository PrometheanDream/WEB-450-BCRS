import { Routes, RouterModule, ROUTES } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { SecurityQuestionnaireComponent } from './security-questionnaire/security-questionnaire.component';
import {LoginComponent} from './login/login.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import {ErrorComponent} from './error/error.component';


import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServiceOrderFormComponent } from './service-order-form/service-order-form.component';
import { ServiceInvoiceFormComponent } from './service-invoice-form/service-invoice-form.component';
import { ServiceOrderViewComponent } from './service-order-view/service-order-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




export const AppRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent
  },
  {
    path: 'user-create',
    component: UserCreateComponent
  },
  {
    path: 'questionnaire',
    component: SecurityQuestionnaireComponent
  },
  {
    path: 'questionnaire/:id',
    component: SecurityQuestionnaireComponent
  },
  {
    path: 'session/login',
    component: LoginComponent
  },
  {
    path: 'session/error',
    component: ErrorComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'updatepassword',
    component: UpdatePasswordComponent
  },
  {
    path: 'homepage',
    component: HomePageComponent
  },
  {
    path: 'service-order',
    component: ServiceOrderFormComponent
  },
  {
    path: 'service-invoice',
    component: ServiceInvoiceFormComponent
  },
  {
    path: 'service-order-view/:id',
    component: ServiceOrderViewComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  
];
