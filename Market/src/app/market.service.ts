import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product,PRODUCTS} from './Product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MarketService {

  constructor() {}

  getProducts(): Observable<Product[]> {
console.log(PRODUCTS);
return of (PRODUCTS);
  }
}

