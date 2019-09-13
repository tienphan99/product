import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css']
})
export class Bai3Component implements OnInit {
  products = [
    {
      id: 'pd100',
      images:"../../assets/images/laptop.jpg",
      name: 'Laptop',
      price: 10100000,
    },
    {
      id: 'pd101',
      images:"../../assets/images/dt.jpg",
      name: "Mobile",
      price: 5900000
    },
    {
      id: 'pd102',
      images: '../../assets/images/manhinh.jpg',
      name: 'Telivision',
      price: 15500000
    },
    {
      id: 'pd103',
      images: "../../assets/images/tainghe.jpg",
      name: 'Head Phone',
      price: 900000
    }
  ];
  constructor() { }
  quantities={} ;
  ngOnInit() {
  /*   this.ex3.getdata().subscribe(
      data => this.products = data
    ); */
    this.products.forEach(product => {
      this.quantities[product.id] = 0
    });
  }

  onIncreaseQuantities(id) {
    let count = this.quantities[id];
    if (count < 20) {
    ++count;
    }
    this.quantities[id] = count;
  }
  onDecreaseQuantities(id) {
    let count = this.quantities[id];
    if (count > 0) {
    --count;
    }
    this.quantities[id] = count;
  }

  totalPrice() {
    let total = 0;
    for (let product of this.products) {
      total += product.price * this.quantities[product.id]
    }
    return total;
  }

}


