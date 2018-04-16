import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { BuildingDataComponent } from './building-data/building-data.component';
import {BuildingService} from "./building.service";
import { AnalyticsComponent } from './analytics/analytics.component';
import { AnalyticsService } from './analytics.service';


@NgModule({
  declarations: [
    AppComponent,
    BuildingDataComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [BuildingService, AnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
