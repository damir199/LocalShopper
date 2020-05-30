import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { StoreComponent } from './components/store/store.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductComponent } from './components/product/product.component';
import { LandingSearchComponent } from './components/landing-search/landing-search.component';
import { VendorDashboardComponent } from './components/vendor-dashboard/vendor-dashboard.component';



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
        path: "stores",
        component: StoreComponent,
      },
      {
        path: "products",
        component: ProductComponent,
      },
      {
        path: "Dashboard",
        component: VendorDashboardComponent,
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
