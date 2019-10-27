import { Component, OnInit } from '@angular/core';
import { CategorieService } from  '../../services/categories.service'

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  listGuitar: any= [];
  constructor(private  categories:CategorieService) { }

  ngOnInit() {
    this.categories.getdata().subscribe(
      data => this.listGuitar = data)
      
  }

}
