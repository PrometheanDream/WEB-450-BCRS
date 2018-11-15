import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionService} from '../session.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-service-order-form',
  templateUrl: './service-order-form.component.html',
  styleUrls: ['./service-order-form.component.css']
})
export class ServiceOrderFormComponent implements OnInit {
form: FormGroup
service: any
id: string
checked: boolean
token: string
services: any


//used to calculate order total
totalCost = 0;
cost1 = 1.5;
cost2 = 2.5;
cost3 = 4.5;
cost4 = 5.0; 
cost5 = 4.5;
cost6 = 1.0;
cost7 = 2.5;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private router: Router, private sessionService: SessionService) { 

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
    this.form = this.fb.group({
      password_reset: [false],
      spyware_removal: [false],
      ramUpgrade: [false],
      software_install: [false],
      tuneUp: [false],
      keyboardClean: [false],
      diskClean: [false],
    })
  
  }
  //updates the cost total depending on which checkbox is clicked
  updateCost1() {
    this.totalCost += this.cost1;
  }
  updateCost2() {
    this.totalCost += this.cost2;
  }
  updateCost3() {
    this.totalCost += this.cost3;
  }
  updateCost4() {
    this.totalCost += this.cost4;
  }
  updateCost5() {
    this.totalCost += this.cost5;
  }
  updateCost6() {
    this.totalCost += this.cost6;
  }
  updateCost7() {
    this.totalCost += this.cost7;
  }


  onSubmit() {
    this.service = {
      password_reset: this.form.controls['password_reset'].value,
      spyware_removal: this.form.controls['spyware_removal'].value,
      ramUpgrade: this.form.controls['ramUpgrade'].value,
      software_install: this.form.controls['software_install'].value,
      tuneUp: this.form.controls['tuneUp'].value,
      keyboardClean: this.form.controls['keyboardClean'].value,
      diskClean: this.form.controls['diskClean'].value,
      order_total: this.totalCost
    }
  

  this.http.post('/api/services', this.service).subscribe(res => {
    this.router.navigate(['/service-invoice'], res)
    })
  }
}

