import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any

  constructor(private http: HttpClient, private router: Router) {
    this.http.get('/api/user').subscribe(data => {
      this.users = data
    })
  }

  ngOnInit() {
  }

  onDelete(id) {

    this.http.delete('/api/user/' + id).subscribe(res => {
      this.router.navigate(['/users'], res)
    })
  }

}
