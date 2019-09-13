import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
import { products } from '../products';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cart: CartService) { }
  product;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('productId'))
      this.product = products.filter(product => {
        return product.productId === id
      })[0];
    });
  }
  addtocart() {
    this.cart.addToCart(this.product);
    console.log(this.cart);
  }
}