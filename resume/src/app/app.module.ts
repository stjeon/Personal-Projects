import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsExperienceComponent } from './skills-experience/skills-experience.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimelineComponent,
    NavComponent,
    FooterComponent,
    SkillsExperienceComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
