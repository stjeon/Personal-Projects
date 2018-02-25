import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {MarketService} from '../market.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
data: Product[];
constructor(private marketService: MarketService) {}

  getProducts(): void {
this.marketService.getProducts().subscribe(data => this.data = data);
  }

  ngOnInit() {
  this.getProducts();
  }

}
