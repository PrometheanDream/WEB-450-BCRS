import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-logs-page',
  templateUrl: './route-logs-page.component.html',
  styleUrls: ['./route-logs-page.component.css']
})
export class RouteLogsPageComponent implements OnInit {
  logs: any
  displayedColumns: string[] = ['when', 'from', 'status', 'what'];
  string: any
  objects: any

  constructor(private http: HttpClient, private router: Router) {
    
    this.http.get('/api/logs', {responseType: 'text'})
    .subscribe(data => { this.logs = data },
       this.string = this.logs.split('\n'));
    
    

   }


  
  ngOnInit() {
    
  }

}
