import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
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


//used to calculate order total
totalCost = 0;
cost1 = 15;
cost2 = 25;
cost3 = 45;
cost4 = 50; 
cost5 = 45;
cost6 = 10;
cost7 = 25;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private router: Router, private sessionService: SessionService) { }


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

