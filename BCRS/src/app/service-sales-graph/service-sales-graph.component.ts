import { Component, OnInit } from '@angular/core';
import {HttpClient,  HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionService} from '../session.service';

@Component({
  selector: 'app-service-sales-graph',
  templateUrl: './service-sales-graph.component.html',
  styleUrls: ['./service-sales-graph.component.css']
})
export class ServiceSalesGraphComponent implements OnInit {
  productInfo: any
  service: any
  token: string

  constructor(private http: HttpClient, private router: Router, private sessionService: SessionService) {
      // gets token from local storage and assigns to this.token
      this.token = sessionService.getLocalStorage()
      // creates a new HttpHeaders and assigns this.token to the x-access-token
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    this.http.get('http://localhost:3000/api/services', {headers} ).subscribe(data => {
      this.service = data
    });


    this.http.get('/api/services/aggregate').subscribe( data => {
      this.productInfo = {
        total: data['total']

      }

    })

   }

  ngOnInit() {
  }

}
