import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './pages/read/read.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {path: 'objects', component: ReadComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjectsRoutingModule { }
