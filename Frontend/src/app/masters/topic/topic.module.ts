import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicRoutingModule } from './topic-routing.module';
import { TopicComponent } from './topic.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { TopicAddEditComponent } from './components/topic-add-edit/topic-add-edit.component';
import { MaterialModule } from 'src/app/material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [TopicComponent, TopicListComponent, TopicAddEditComponent],
  imports: [
    CommonModule,
    TopicRoutingModule,
    MaterialModule,
    ReactiveFormsModule, FlexLayoutModule
  ]
})
export class TopicModule { }
