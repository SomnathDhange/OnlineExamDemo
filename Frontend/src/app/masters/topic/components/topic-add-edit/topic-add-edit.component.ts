import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-topic-add-edit',
  templateUrl: './topic-add-edit.component.html',
  styleUrls: ['./topic-add-edit.component.scss']
})
export class TopicAddEditComponent implements OnInit {

  topicForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.topicForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      chapterId: new FormControl('', [Validators.required]),
      subjectId: new FormControl('', [Validators.required])
    });
  }
  get f() {
    return this.topicForm.controls;
  }

}
