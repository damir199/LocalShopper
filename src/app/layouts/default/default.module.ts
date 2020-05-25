import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";





@NgModule({
  declarations: [
    DefaultComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatProgressSpinnerModule


  ]
})
export class DefaultModule { }
