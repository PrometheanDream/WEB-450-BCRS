import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  form: FormGroup
  user: any

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required ])],
      password: [null, Validators.compose([Validators.required ])],
      firstname: [null, Validators.compose([Validators.required ])],
      lastname: [null, Validators.compose([Validators.required ])],
      address: [null, Validators.compose([Validators.required ])],
    })
  }

  onSubmit() {
    this.user = {
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
      last_name: this.form.controls['lastname'].value,
      first_name: this.form.controls['firstname'].value,
      address: this.form.controls['address'].value
    }

    this.http.post('/api/user', this.user).subscribe(res => {
      this.router.navigate(['/users'], res)
    })
  }
}
