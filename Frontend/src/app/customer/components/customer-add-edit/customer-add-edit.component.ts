import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-add-edit',
  templateUrl: './customer-add-edit.component.html',
  styleUrls: ['./customer-add-edit.component.scss']
})
export class CustomerAddEditComponent implements OnInit {

  customerFormGroup: FormGroup;
  constructor() { }

  ngOnInit(): void { }

  onSubmit() {

  }
}
