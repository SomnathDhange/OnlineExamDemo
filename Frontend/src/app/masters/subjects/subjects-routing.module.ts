import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectAddEditComponent } from './components/subject-add-edit/subject-add-edit.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectComponent } from './subject.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectComponent,
    children: [
      {
        path: 'list',
        component: SubjectListComponent
      },
      {
        path: 'add',
        component: SubjectAddEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
