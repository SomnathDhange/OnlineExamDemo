import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectComponent } from './subject.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { MaterialModule } from 'src/app/material-module';
import { SubjectAddEditComponent } from './components/subject-add-edit/subject-add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';  
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SubjectComponent, SubjectListComponent, SubjectAddEditComponent],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    MaterialModule,
    ReactiveFormsModule, 
    FlexLayoutModule
  ],
  exports:[

  ]
})
export class SubjectsModule { }
