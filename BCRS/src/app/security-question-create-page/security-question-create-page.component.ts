import { Component, OnInit } from '@angular/core';

export interface SecurityQuestionsGroupOne {
  value: string;
  viewValue: string;
}

export interface SecurityQuestionsGroupTwo {
  value: string;
  viewValue: string;
}

export interface SecurityQuestionsGroupThree {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-security-question-create-page',
  templateUrl: './security-question-create-page.component.html',
  styleUrls: ['./security-question-create-page.component.css']
})
export class SecurityQuestionCreatePageComponent implements OnInit {

  securityBankOne: SecurityQuestionsGroupOne[] = [
    {value: 'question-0', viewValue: 'Question 1'},
    {value: 'question-1', viewValue: 'Question 2'},
    {value: 'question-2', viewValue: 'Question 3'}
  ];

  securityBankTwo: SecurityQuestionsGroupTwo[] = [
    {value: 'question-3', viewValue: 'Question 4'},
    {value: 'question-4', viewValue: 'Question 5'},
    {value: 'question-5', viewValue: 'Question 6'}
  ];

  securityBankThree: SecurityQuestionsGroupThree[] = [
    {value: 'question-6', viewValue: 'Question 7'},
    {value: 'question-7', viewValue: 'Question 8'},
    {value: 'question-8', viewValue: 'Question 9'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
