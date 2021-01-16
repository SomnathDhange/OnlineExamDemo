import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  
const routes: Routes = [
  {
    path: 'setup',
    loadChildren: () => import('./masters/masters.module')
      .then(m => m.MastersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
