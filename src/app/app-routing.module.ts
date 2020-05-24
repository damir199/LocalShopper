import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './auth/login/login.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './auth/register/register.component';
import { VendorRegistrationComponent } from './auth/vendor-registration/vendor-registration.component';
import { StoreComponent } from './components/store/store.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
      },
      {
        path: "vendor-registration",
        component: VendorRegistrationComponent,
      },
      {
        path: "stores/:id",
        component: StoreComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
