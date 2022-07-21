import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { ReadComponent } from './pages/read/read.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {path: 'petitions', component: ReadComponent},
            {path: 'petitions/create', component: CreateComponent},
            {path: 'petitions/update', component: UpdateComponent},
            {path: 'petitions/delete', component: DeleteComponent},
            {path: '**', redirectTo: 'tables/petitions'}
        ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
],
  exports: [RouterModule]
})
export class PetitionsRoutingModule { }
