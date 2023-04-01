import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WriteRoutingModule } from './write-routing.module';
import { WriteComponent } from './write/write.component';


@NgModule({
  declarations: [
    WriteComponent
  ],
  imports: [
    CommonModule,
    WriteRoutingModule
  ]
})
export class WriteModule { }
