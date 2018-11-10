import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionService} from '../session.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'email', 'firstName', 'lastName', 'address', 'update', 'updateSecurity', 'delete'];
  users: any;
  token: string

  constructor(private http: HttpClient, private router: Router, private sessionService: SessionService) {
    this.token = sessionService.getLocalStorage()

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    })

    this.http.get('http://localhost:3000/api/user', {headers} ).subscribe(data => {
      this.users = data
    });
  }

  ngOnInit() {
  }

  onDelete(id) {
    this.http.delete('/api/user/' + id, {
      headers: new HttpHeaders().set('x-access-token', this.token)
    }).subscribe(res => {
      this.router.navigate(['/users'], res);
    });
  }

}
