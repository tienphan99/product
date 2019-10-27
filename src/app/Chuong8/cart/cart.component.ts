import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../services/categories.service';
import { Item } from '../../model/items';
import { ActivatedRoute } from '@angular/router';
import { Guitar } from '../../model/guitar';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = [];
	total = [];
	temp;
  constructor(private route: ActivatedRoute,private service: CategorieService) { }

  ngOnInit() {
    this.items = this.service.getguitar();
		this.total = this.service.getquantity();
  }
  quantity()  {
		return this.total;
  }
  clearcart() {
		this.service.clearguitar();
		this.items = this.service.getguitar()
	}
}
