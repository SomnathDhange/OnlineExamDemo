import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicAddEditComponent } from './components/topic-add-edit/topic-add-edit.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { TopicComponent } from './topic.component';

const routes: Routes = [{
  path: '',
  component: TopicComponent,
  children: [
    {
      path: 'list',
      component: TopicListComponent
    },
    {
      path: 'add',
      component: TopicAddEditComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicRoutingModule { }
