import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChapterAddEditComponent } from './components/chapter-add-edit/chapter-add-edit.component';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';
import { ChapterComponent } from './chapter.component';

const routes: Routes = [
  {
    path: '',
    component: ChapterComponent,
    children: [
      {
        path: 'list',
        component: ChapterListComponent
      },
      {
        path: 'add',
        component: ChapterAddEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChapterRoutingModule { }
