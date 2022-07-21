import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetitionsRoutingModule } from './petitions-routing.module';
import { ReadComponent } from './pages/read/read.component';
import { CreateComponent } from './pages/create/create.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { UpdateComponent } from './pages/update/update.component';
import { ComponentsModule } from '../shared/components/components.module';


@NgModule({
  declarations: [
    ReadComponent,
    CreateComponent,
    DeleteComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    PetitionsRoutingModule,
    ComponentsModule
  ]
})
export class PetitionsModule { }
