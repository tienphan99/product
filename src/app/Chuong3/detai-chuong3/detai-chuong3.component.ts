import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import {Location} from '@angular/common'; 
import { dulieu } from '../dulieu'

@Component({
  selector: 'app-detai-chuong3',
  templateUrl: './detai-chuong3.component.html',
  styleUrls: ['./detai-chuong3.component.css']
})
export class DetaiChuong3Component implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) { }
  product

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = parseInt(params.get('id'))
      console.log(id)
      if (!id) {
        this.location.replaceState("/student/1")
        id = 1
      }

      this.product = dulieu.filter(product => {
        return product.id === id
      })[0]
    })
  }

}
