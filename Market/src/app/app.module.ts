import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {MarketService} from './market.service';
import { ProductlistComponent } from './productlist/productlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const appRoutes: Routes = [
  {path: 'index', component: ProductlistComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
  {path: 'index/details/:id', component: ProductDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    PageNotFoundComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MarketService],
  bootstrap: [AppComponent]
})
export class AppModule { }





