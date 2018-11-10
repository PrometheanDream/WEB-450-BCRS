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
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private router: Router, private sessionService: SessionService) { }

  ngOnInit() {
    this.form = this.fb.group({
      password_reset: [null],
      spyware_removal: [null],
      ramUpgrade: [null],
      software_install: [null],
      tuneUp: [null],
      keyboardClean: [null],
      diskClean: [null],
    })
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
    }
  

  this.http.post('/api/services', this.service).subscribe(res => {
    this.router.navigate(['/service-invoice'], res)
    })
  }
}

