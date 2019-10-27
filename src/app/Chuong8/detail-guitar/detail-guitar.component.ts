import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; 
import { Guitar } from '../../model/guitar';
import { Observable , of } from 'rxjs';
import { Location } from '@angular/common';
import { CategorieService } from '../../services/categories.service';

@Component({
  selector: 'app-detail-guitar',
  templateUrl: './detail-guitar.component.html',
  styleUrls: ['./detail-guitar.component.css']
})
export class DetailGuitarComponent implements OnInit {
    productdetail;
    num : number = 1;
    constructor( private http : HttpClient , private route : ActivatedRoute,private location : Location,private service : CategorieService){ }
     

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id'));
      this.getproduct().subscribe(guitar => {
        this.productdetail = guitar.filter(gui => {
          return gui.id === id;
        })[0];
      })
    })

}
getproduct(): Observable<Guitar[]> {
  return this.http.get<Guitar[]>('../../assets/guitar.json');
}
addtocart(product ) {
  window.alert('It has been add to cart');
  this.service.addtocart(product , this.num);
}
back() {
  this.location.back();
}
}
