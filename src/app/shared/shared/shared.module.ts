import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from 'src/app/modules/angular-material/angular-material.module';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

import { RegisterComponent } from 'src/app/auth/register/register.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { ErrorComponent } from 'src/app/error/error/error.component';
import { VendorRegistrationComponent } from 'src/app/auth/vendor-registration/vendor-registration.component';
import { ProductComponent } from 'src/app/components/product/product.component';
import { StoreComponent } from 'src/app/components/store/store.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    LoginComponent,
    RegisterComponent,
    SearchBarComponent,
    ErrorComponent,
    VendorRegistrationComponent,
    ProductComponent,
    StoreComponent


  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    LoginComponent,
    RegisterComponent,
    SearchBarComponent,
    ErrorComponent,
    VendorRegistrationComponent,
    ProductComponent,
    StoreComponent

  ],
})
export class SharedModule { }
