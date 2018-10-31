import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
