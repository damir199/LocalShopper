import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AngularMaterialModule } from "../modules/angular-material/angular-material.module";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { VendorRegistrationComponent } from "./vendor-registration/vendor-registration.component";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    VendorRegistrationComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
