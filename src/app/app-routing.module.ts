import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Quicknotes } from './quicknotes/quicknotes.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'app',
    pathMatch:'full',
  },
  {
    path:'quicknotes',
    component: Quicknotes
    },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
