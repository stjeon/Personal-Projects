import { Component, OnInit } from '@angular/core';
import {Analytics} from "./analytics";
import {AnalyticsService} from "../analytics.service";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  analytics: Analytics[]=[];

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit() {
    this.showAnalsis();
    console.log(this.analytics);
  }

  showAnalsis():void{
    this.analyticsService.getAnalytics().subscribe(
      (data: Analytics[])=>{
        this.analytics = data;
      }
    )
  }

}
