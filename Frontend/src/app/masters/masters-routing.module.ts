import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MastersComponent } from './masters.component';

const routes: Routes = [
  {
    path: '',
    component: MastersComponent,
    children: [
      {
        path: 'subject',
        loadChildren: () => import('./subjects/subjects.module')
          .then(m => m.SubjectsModule)
      },
      {
        path: 'chapter',
        loadChildren: () => import('./chapters/chapters.module')
          .then(m => m.ChaptersModule)
      },

      {
        path: 'topic',
        loadChildren: () => import('./topic/topic.module')
          .then(m => m.TopicModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
