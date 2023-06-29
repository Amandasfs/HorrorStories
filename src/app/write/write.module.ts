import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WriteRoutingModule } from './write-routing.module';
import { WriteComponent } from './write/write.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    WriteComponent
  ],
  imports: [
    CommonModule,
    WriteRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatPaginatorModule,
    MatMenuModule
  ]
})
export class WriteModule {}
