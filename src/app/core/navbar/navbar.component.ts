import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {SessionService} from '../../session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
users: any
token: string
user: any
id: string
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private sessionService: SessionService,) { 
    
    this.token = sessionService.getLocalStorage()
    // creates a new HttpHeaders and assigns this.token to the x-access-token
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

}
