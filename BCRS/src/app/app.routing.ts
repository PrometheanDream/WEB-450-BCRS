import { Routes, RouterModule } from '@angular/router'
import { UserComponent } from './user/user.component'
import { UserEditComponent } from './user-edit/user-edit.component'
import {UserCreateComponent} from './user-create/user-create.component';
import { SecurityQuestionnaireComponent } from './security-questionnaire/security-questionnaire.component';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ErrorComponent} from './error/error.component';



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
    path: 'questionnaire/:id',
    component: SecurityQuestionnaireComponent
  },
  {
    path: 'session/login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
  {
    path: 'session/error',
    component: ErrorComponent
  }
]

