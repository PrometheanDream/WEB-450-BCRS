import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// forms
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

// charts module
import { ChartsModule } from 'ng2-charts';

// material components
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar'

// custom app components
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './core';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AppRoutes } from './app.routing';
import { UserCreateComponent } from './user-create/user-create.component';
import { SecurityQuestionnaireComponent } from './security-questionnaire/security-questionnaire.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';


// session
import { LocalStorageService } from 'ngx-webstorage';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServiceOrderFormComponent } from './service-order-form/service-order-form.component';
import { ServiceInvoiceFormComponent } from './service-invoice-form/service-invoice-form.component';
import { ServiceOrderViewComponent } from './service-order-view/service-order-view.component';
import { ServiceSalesGraphComponent } from './service-sales-graph/service-sales-graph.component';
import { RouteLogsPageComponent } from './route-logs-page/route-logs-page.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    UserEditComponent,
    UserCreateComponent,
    SecurityQuestionnaireComponent,
    LoginComponent,
    ErrorComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    ServerErrorComponent,
    UpdatePasswordComponent,
    HomePageComponent,
    ServiceOrderFormComponent,
    ServiceInvoiceFormComponent,
    ServiceOrderViewComponent,
    ServiceSalesGraphComponent,
    RouteLogsPageComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    RouterModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    ChartsModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false }),
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
