import { Injectable } from '@angular/core';
import {Building} from "./building-data/building";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable";
import {Response} from "@angular/http";

@Injectable()
export class BuildingService {
  private _bldgURL = "http://jobs.mapsted.com/api/Values/GetBuildingData"
  constructor(private http:HttpClient) { }

  getBuilding(){
return this.http.get(this._bldgURL)
  .map((res:Building[])=>res);
  }
}
