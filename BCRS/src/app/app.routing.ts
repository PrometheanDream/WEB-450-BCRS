import { Routes, RouterModule } from '@angular/router'
import { UserComponent } from './user/user.component'
import { UserEditComponent } from './user-edit/user-edit.component'
import {UserCreateComponent} from './user-create/user-create.component';


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
  }
]

