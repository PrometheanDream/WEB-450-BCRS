import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id: String
  user: any

  constructor(private route: ActivatedRoute, private http: HttpClient ) {

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
  }

}
