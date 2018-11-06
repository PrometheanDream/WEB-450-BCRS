import { Component, OnInit }  from '@angular/core';
import { HttpClient }         from '@angular/common/http';

@Component({
  selector: 'app-user-management-page',
  templateUrl: './user-management-page.component.html',
  styleUrls: ['./user-management-page.component.css']
})
export class UserManagementPageComponent implements OnInit {

users: any;

  constructor(private http: HttpClient) {
    this.http.get('/api/user-management').subscribe(data => { this.users = data ;});
   }

  ngOnInit() {
  }

}
