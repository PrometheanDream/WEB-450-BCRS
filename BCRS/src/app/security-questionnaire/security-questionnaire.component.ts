import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-security-questionnaire',
  templateUrl: './security-questionnaire.component.html',
  styleUrls: ['./security-questionnaire.component.css']
})
export class SecurityQuestionnaireComponent implements OnInit {
  form: FormGroup
  questionnaire: any

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      answer1: [null, Validators.compose([Validators.required ])],
      answer2: [null, Validators.compose([Validators.required ])],
      answer3: [null, Validators.compose([Validators.required ])],
      answer4: [null, Validators.compose([Validators.required ])],
    })
  }

  onSubmit() {
    this.questionnaire = {
      answer1: this.form.controls['answer1'].value,
      answer2: this.form.controls['answer2'].value,
      answer3: this.form.controls['answer3'].value,
      answer4: this.form.controls['answer4'].value,
    }

    this.http.post('/api/questionnaire', this.questionnaire).subscribe(res => {
      this.router.navigate(['/users'], res)
    })
  }
}