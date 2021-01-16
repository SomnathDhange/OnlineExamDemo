import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientService } from 'src/app/core/rest-client.service';
import { SubjectModel } from '../models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private restClient: RestClientService) { }

  getAll(): Observable<SubjectModel[]> {
    return this.restClient.get('subject');
  }

  add(body: SubjectModel): Observable<any> {
    return this.restClient.post('subject', body);
  }
}
