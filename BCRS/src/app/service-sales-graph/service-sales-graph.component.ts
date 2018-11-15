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

  public barChartData: number[] = [];
  public barChartLabels:string[] = [];
  
  
  
  productStats: Array<object> = [
    { name: "Password Reset", quantity: "332"},
    { name: "Spyware Removal", quantity: "125"},
    { name: "RAM Upgrade", quantity: "34"},
    { name: "Software Installation", quantity: "249" },
    { name: "Tune-up", quantity: "560" },
    { name: "Keyboard Cleaning", quantity: "87" },
    { name: "Disk Clean-up", quantity: "149" },
    { name: "Total $ in Hundreds", quantity: "219" }
  ];

  prepareChartData() {
    for (let x = 0; x < this.productStats.length; x++) {
      this.barChartData.push(this.productStats[x]["quantity"]);
    }
  }
  

  //for barchart
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };


  //chart columns and data
  //public barChartLabels:string[] = ['Password Resets', 'Spyware Removals', 
  //'Ram Upgrades', 'Software Installs', 'Tune Ups', 'Cleaned Keyboards', 
  //'Cleaned Disks', 'Total $ in Hundreds'];
  


  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  //chart data copy before messing with it
  //public barChartData:any[] = [
    //{data: [65, 59, 80, 81, 56, 55, 40, 3], label: 'Units Sold'}
  //];

  //chart events
   public chartClicked(e:any):void {
    console.log(e);
  }
    public chartHovered(e:any):void {
    console.log(e);
  }
  
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

    /*
    this.http.get('/api/services/aggregate').subscribe( data => {
     this.aggregates = data
     console.log("INSIDE SUBSCRIBE", this.aggregates );
    });
    */

//inputting the data into the barchartarray
    this.http.get('/api/services/aggregate').subscribe(
      res=> {
          this.barChartData = [ res[1]['Password Resets'], res[2]['Spyware Removals'], 
          res[3]['Ram Upgrades'], res[4]['Software Installs'], res[5]['Tune Ups'], 
          res[6]['Cleaned Keyboards'], res[7]['Cleaned Disks'], res[8]['Total $ in Hundreds']] ;
      },
      err =>{
  
      }
  );

      
   }

  ngOnInit() {
  }

}
//currently out of use, trying to get parse to work to fill chart array
/*this.http.get('/api/services/aggregate').subscribe( data => {
      this.productInfo = {
        _id: data['_id'],
        total: data['total'],
        password_reset: data['passwordCount'],
        spyware_removal: data['spyCount'],
        ramUpgrade: data['ramCount'],
        software_install: data['softwareCount'],
        tuneUp: data['tuneCount'],
        keyboardClean: data['keyboardCount'],
        diskClean: data['diskCount']
      }
    });*/