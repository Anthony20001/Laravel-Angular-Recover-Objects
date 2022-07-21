import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {path: 'login', component: LoginComponent},
            {path: 'signin', component: SigninComponent},
            {path: 'home', component: HomeComponent},
            {path: '**', redirectTo: 'login'}
        ]
    }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
