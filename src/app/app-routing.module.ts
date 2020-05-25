import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { VendorRegistrationComponent } from './auth/vendor-registration/vendor-registration.component';
import { StoreComponent } from './components/store/store.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductComponent } from './components/product/product.component';
import { LandingSearchComponent } from './components/landing-search/landing-search.component';



const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "auth",
        loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule),
      },
      {
        path: "",
        component: LandingSearchComponent,
      },
      {
        path: "vendor-registration",
        component: VendorRegistrationComponent,
      },
      {
        path: "stores",
        component: StoreComponent,
      },
      {
        path: "products",
        component: ProductComponent,
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
