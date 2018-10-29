import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { UserManagementPageComponent } from './user-management-page/user-management-page.component';
import { SecurityQuestionPageComponent } from './security-question-page/security-question-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatCardModule, } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { LayoutModule, } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    UserManagementPageComponent,
    SecurityQuestionPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
