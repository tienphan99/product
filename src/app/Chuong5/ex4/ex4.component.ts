import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component implements OnInit {
  onChange(id) {
    console.log(parseInt(this.quantity[id]))
    if (!parseInt(this.quantity[id]))
      this.quantity[id] = 0
    else
      this.quantity[id] = parseInt(this.quantity[id])

    this.total = this.items.reduce((a, b) => {
      return a + b.price * this.quantity[b.id]
    }, 0)
  }
  items = [
    {
      id: 1,
      name: "Nước Ngọt",
      price: 20000
    },
    {
      id: 2,
      name: "Đá Xay",
      price: 75000
    },
    {
      id: 3,
      name: "Cà phê đen",
      price: 20000
    },
    {
      id: 4,
      name: "Sinh tố",
      price: 45000
    }
  ]
  constructor() { }
  checked = {}

  quantity = {}

  total = 0

  ngOnInit() {
    this.items.map(product => {
      this.checked[product.id] = false
      this.quantity[product.id] = 0
    })
  }

}
