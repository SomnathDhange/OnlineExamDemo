import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subject-add-edit',
  templateUrl: './subject-add-edit.component.html',
  styleUrls: ['./subject-add-edit.component.scss']
})
export class SubjectAddEditComponent implements OnInit {

  subjectForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.subjectForm = this.fb.group({
      name: new FormControl('', [Validators.required])
    });
  }
  get f() {
    return this.subjectForm.controls;
  }

}
