import { Component, OnInit } from '@angular/core';
import {HttpClient,  HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionService} from '../session.service';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';
import { pipe } from "rxjs";
import { map, take } from "rxjs/operators";

@Component({
  selector: 'app-service-sales-graph',
  templateUrl: './service-sales-graph.component.html',
  styleUrls: ['./service-sales-graph.component.css']
})
export class ServiceSalesGraphComponent implements OnInit {
  productInfo: any
  service: any
  token: string
  aggregates: any
  aggregate: any

  //barChartData: any[] = [];
  
  //for barchart
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  //chart events
  public chartClicked(e:any):void {
    console.log(e);
  }
    public chartHovered(e:any):void {
    console.log(e);
  }

  //chart columns and data
   barChartLabels:string[] = ['Password Resets', 'Spyware Removals', 
  'Ram Upgrades', 'Software Installs', 'Tune Ups', 'Cleaned Keyboards', 
  'Cleaned Disks', 'Total $ x 10'];
  
  //chart data copy before messing with it
  public barChartData:any[] = [
    {data: [0, 0, 0, 0, 0, 0, 0, 0], label: 'Units Sold'}
  ];
  
  constructor(private http: HttpClient, private router: Router, private sessionService: SessionService) {
      
      // gets token from local storage and assigns to this.token
      this.token = sessionService.getLocalStorage()
      // creates a new HttpHeaders and assigns this.token to the x-access-token
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    this.http.get('http://localhost:3000/api/services', {headers} ).subscribe(data => {
      this.service = data
        });

    //inputting the data into the barchartarray
    this.http.get('/api/services/aggregate').subscribe(
      res=> {
          this.barChartData = [ res[0]['passwordCount'], res[0]['spyCount'], 
          res[0]['ramCount'], res[0]['softwareCount'], res[0]['tuneCount'], 
          res[0]['keyboardCount'], res[0]['diskCount'], res[0]['total']] ;
      },
      err =>{
  
      }
  );

      
   }

  ngOnInit() {
  }

}
