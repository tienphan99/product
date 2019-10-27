import { Injectable } from '@angular/core';
import { Guitar } from '../model/guitar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private guitars =[];
  private quantity =[]
  constructor(private http : HttpClient) { }
  url = '../assets/guitar.json';
    getdata() {
    return this.http.get(this.url);
  }
  addtocart(product , index) {
    this.guitars.push(product);  
    this.quantity.push(index);
  }

  getguitar() {
      return this.guitars;
  }
  
  
  getquantity() {
    return this.quantity;
  }

  clearguitar() {
      this.guitars = [];
      this.quantity = []
      return this.guitars , this.quantity;
  }

  
}