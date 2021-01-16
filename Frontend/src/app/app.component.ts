import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Node-Demo';
  pageTitle = "Dashboard"
  pageMenu: any = [
    {
      menuIcon: "dashboard",
      title: "Dashboard",
      path: "/dashboard"
    },
    {
      menuIcon: "subject",
      title: "Subject",
      path: "/setup/subject/list"
    },
    {
      menuIcon: "description",
      title: "Chapter",
      path: "/setup/chapter/list"
    },
    {
      menuIcon: "account_circle",
      title: "Customer",
      path: "/customer"
    }
  ]
}
