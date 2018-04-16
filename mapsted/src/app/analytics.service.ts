import { Injectable } from '@angular/core';
import {Analytics} from "./analytics/analytics";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import 'rxjs/add/operator/map'

@Injectable()
export class AnalyticsService {
  private _anaURL ="http://jobs.mapsted.com/api/Values/GetAnalyticsData"
  constructor(private http:HttpClient) { }

  getAnalytics(){
    return this.http.get(this._anaURL)
      .map((res:Analytics[])=>res);
  }
}
