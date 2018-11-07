import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id: String
  user: any
  form: FormGroup


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private router: Router ) {

    this.id = route.snapshot.paramMap.get('id')

    this.http.get('/api/user/' + this.id).subscribe( data => {
      this.user = {
        _id: data['_id'],
        email: data['email'],
        first_name: data['first_name'],
        last_name: data['last_name'],
        address: data['address']
      }
    })
  }

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

    this.http.put('/api/user/' + this.id, this.user).subscribe(res => {
      this.router.navigate(['/users'], res)
    })
  }
}
