import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient,  HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionService} from '../session.service';

@Component({
  selector: 'app-service-invoice-form',
  templateUrl: './service-invoice-form.component.html',
  styleUrls: ['./service-invoice-form.component.css']
})
export class ServiceInvoiceFormComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'create_date', 'order_total', 'viewInvoice'];
id: string
token: string
services: any
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private sessionService: SessionService ) {

    this.token = sessionService.getLocalStorage()

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    })

    this.http.get('http://localhost:3000/api/services', {headers} ).subscribe(data => {
      this.services = data
    });
   }

  ngOnInit() {
  }

}
