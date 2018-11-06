import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-account-registration-page',
  templateUrl: './account-registration-page.component.html',
  styleUrls: ['./account-registration-page.component.css']
})
export class AccountRegistrationPageComponent implements OnInit {


  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {}


      
 

  }
