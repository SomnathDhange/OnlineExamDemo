import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';
import { ChapterAddEditComponent } from './components/chapter-add-edit/chapter-add-edit.component';
import { ChapterComponent } from './chapter.component';
import { ChapterRoutingModule } from './Chapter-routing.module';
import { MaterialModule } from 'src/app/material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ChapterComponent, ChapterListComponent, ChapterAddEditComponent],
  imports: [
    CommonModule,
    ChapterRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class ChaptersModule { }
