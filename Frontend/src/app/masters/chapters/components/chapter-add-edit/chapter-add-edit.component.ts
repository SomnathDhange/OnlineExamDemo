import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chapter-add-edit',
  templateUrl: './chapter-add-edit.component.html',
  styleUrls: ['./chapter-add-edit.component.scss']
})
export class ChapterAddEditComponent implements OnInit {

  chapterForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.chapterForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required])
    })
  }
  get f() {
    return this.chapterForm.controls;
  }

}
