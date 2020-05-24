import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AngularMaterialModule } from 'src/app/modules/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SearchBarComponent } from '../search-bar/search-bar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchBarComponent

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchBarComponent

  ],
})
export class SharedModule { }
