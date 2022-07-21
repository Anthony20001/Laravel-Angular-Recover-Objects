import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectsRoutingModule } from './objects-routing.module';
import { ReadComponent } from './pages/read/read.component';
import { ComponentsModule } from '../shared/components/components.module';


@NgModule({
  declarations: [
    ReadComponent
  ],
  imports: [
    CommonModule,
    ObjectsRoutingModule,
    ComponentsModule
  ]
})
export class ObjectsModule { }
