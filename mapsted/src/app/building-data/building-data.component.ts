import { Component, OnInit } from '@angular/core';
import {Building} from "./building";
import {BuildingService} from "../building.service";

@Component({
  selector: 'app-building-data',
  templateUrl: './building-data.component.html',
  styleUrls: ['./building-data.component.css']
})
export class BuildingDataComponent implements OnInit {
building: Building[]=[];

  constructor(private buildingService: BuildingService) { }

  ngOnInit() {
    this.showBuilding();
    console.log(this.building);
  }

  showBuilding():void{
this.buildingService.getBuilding().subscribe(
  (data: Building[])=>{
    this.building = data;
  }
)
  }

  }
