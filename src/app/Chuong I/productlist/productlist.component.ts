import { Component, OnInit } from '@angular/core'
import { products } from '../products'
@Component({
  templateUrl: './productlist.component.html',
  selector: 'app-productlist',
  styleUrls: ['./productlist.component.css']

})

export class ProductlistComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log(products);
  }
  changeStatus() {
    this.visibleImage = !this.visibleImage;
  }
  searchText;
  visibleImage = true;
  listProducts = [...products];

}