import { Component, OnInit } from '@angular/core';
import { SubjectModel } from '../../models/subject.model';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  subjects: SubjectModel[] = [];

  constructor(private subjectServices: SubjectService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.subjectServices.getAll().subscribe((subjects: SubjectModel[]) => {
      this.subjects = subjects;
      console.log(subjects);
    });
  }


}
