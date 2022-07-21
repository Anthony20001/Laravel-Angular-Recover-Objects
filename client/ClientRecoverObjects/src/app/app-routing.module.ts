import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'tables',
        loadChildren: () => import('./petitions/petitions.module').then(m => m.PetitionsModule)
    },
    {
        path: 'tables',
        loadChildren: () => import('./objects/objects.module').then(m => m.ObjectsModule)
    },
    {
        path: '**', 
        redirectTo: 'auth'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
