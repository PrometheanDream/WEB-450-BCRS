import { Component, OnInit } from '@angular/core';
import {HttpClient,  HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionService} from '../session.service';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';

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
  

  //for barchart
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Password Resets', 'Spyware Removals', 'Ram Upgrades', 'Software Installs', 'Tune Ups', 'Cleaned Keyboards', 'Cleaned Disks', 'Total $ in Hundreds'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  //chart data copy before messing with it
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40, 3], label: 'Units Sold'}
  ];

   //barChartData: any[] = []
  
   //prepareChartData() {
    // for (let x = 0; x < this.aggregates.length; x++) {
    //   this.barChartData.push(this.aggregates[x]["Units Sold"])
    // }
  // }

   //productStats: Array<object> = this.aggregates;

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


    this.http.get('/api/services/aggregate').subscribe( data => {
     this.aggregates = JSON.stringify(data)
    });

  

      
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