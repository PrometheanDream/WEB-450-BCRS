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
  submitForm: FormGroup;
  loading = false;
  submitted = false;

  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.submitForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      emailAddress: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(7)]]
  });
  }

      // convenience getter for easy access to form fields
      get f() { return this.submitForm.controls; }

      onSubmit(formData) {
        this.submitted = true;

        if (formData) {
          console.log(formData.value)
        }

        // stops when invalid
        if (this.submitForm.invalid) {
            return;
        }

        this.loading = true;
        
    }

}
