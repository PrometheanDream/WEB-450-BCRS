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
form: FormGroup

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder, private sessionService: SessionService) {
    
   }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required ])],
      password: [null, Validators.compose([Validators.required ])],
    })
  }

  onSubmit() {
    this.user = {
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
    }

    this.http.put('/api/session/new-password', this.user)
      .subscribe(res => {
        this.user = res; 
        this.router.navigateByUrl('/session/login'), (err) => {console.log(err)}
    });
  }

}
