import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatMenuModule
  ]
})
export class HomeModule { }
