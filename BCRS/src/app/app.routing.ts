import { Routes, RouterModule, ROUTES } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { SecurityQuestionnaireComponent } from './security-questionnaire/security-questionnaire.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent,
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
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    component: ServerErrorComponent,
  }
];
