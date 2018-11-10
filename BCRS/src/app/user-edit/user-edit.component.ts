import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient,  HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionService} from '../session.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id: String
  user: any
  users: any;
  form: FormGroup
  token: string


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private router: Router, private sessionService: SessionService ) {
    // gets token from local storage and assigns to this.token
    this.token = sessionService.getLocalStorage()
    // creates a new HttpHeaders and assigns this.token to the x-access-token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    })
    // pulls the user header
    this.http.get('http://localhost:3000/api/user', {headers} ).subscribe(data => {
      this.users = data
    });



    // assigns this.id the parameter id from the header info
    this.id = route.snapshot.paramMap.get('id')

    // grabs database info and maps the info from the selected user for current info
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
  //creates form on init and requires these fields
  ngOnInit() {
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required ])],
      firstname: [null, Validators.compose([Validators.required ])],
      lastname: [null, Validators.compose([Validators.required ])],
      address: [null, Validators.compose([Validators.required ])],

    })


  }
  //grabs the values from the form
  onSubmit() {
    this.user = {
      email: this.form.controls['email'].value,
      last_name: this.form.controls['lastname'].value,
      first_name: this.form.controls['firstname'].value,
      address: this.form.controls['address'].value,

    }
    // sends the values of this.user to the mapped user as update
    this.http.patch('/api/user/' + this.id, this.user).subscribe(res => {
      this.router.navigate(['/users'], res)
    })
  }
}
