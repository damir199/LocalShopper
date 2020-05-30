import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AngularMaterialModule } from "src/app/modules/angular-material/angular-material.module";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { FlexLayoutModule } from "@angular/flex-layout";

import { ErrorComponent } from "src/app/error/error/error.component";
import { ProductComponent } from "src/app/components/product/product.component";
import { StoreComponent } from "src/app/components/store/store.component";
import { LandingSearchComponent } from "src/app/components/landing-search/landing-search.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    ErrorComponent,
    ProductComponent,
    StoreComponent,
    LandingSearchComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    ErrorComponent,
    ProductComponent,
    StoreComponent,
    LandingSearchComponent,
  ],
})
export class SharedModule {}
