import { Component, OnInit } from '@angular/core';
import {HttpClient,  HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionService} from '../session.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-service-order-view',
  templateUrl: './service-order-view.component.html',
  styleUrls: ['./service-order-view.component.css']
})
export class ServiceOrderViewComponent implements OnInit {
  id: String
  service: any
  token: string

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private sessionService: SessionService) {
    
    
    // gets token from local storage and assigns to this.token
    this.token = sessionService.getLocalStorage()
    // creates a new HttpHeaders and assigns this.token to the x-access-token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    })

    // pulls the info
    this.http.get('http://localhost:3000/api/services', {headers} ).subscribe(data => {
      this.service = data
    });

    this.id = route.snapshot.paramMap.get('id')

    // grabs database info and maps the info from the selected user for current info
    this.http.get('/api/services/' + this.id).subscribe( data => {
      this.service = {
        _id: data['_id'],
        password_reset: data['password_reset'],
        spyware_removal: data['spyware_removal'],
        ramUpgrade: data['ramUpgrade'],
        software_install: data['software_install'],
        tuneUp: data['tuneUp'],
        keyboardClean: data['keyboardClean'],
        diskClean: data['diskClean'],
        order_total: data['order_total']
      }
    })
   }

  ngOnInit() {
  }

}
