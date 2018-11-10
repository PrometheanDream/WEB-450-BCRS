import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionService} from '../session.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
user: any

  constructor(private http: HttpClient, private router: Router) {
    this.http.put('/api/update-password', this.user)
      .subscribe(res => {
        this.user = res; 
        this.router.navigateByUrl('/session/login'), (err) => {console.log(err)}
    });
   }

  ngOnInit() {
  }

}
