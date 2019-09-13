import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from '../models/bai3';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BAI3Service {
  url = '../assets/bai3.json';
  constructor(private http : HttpClient) { }
  getdata(): Observable<products[]>{
   return this.http.get<products []>(this.url);
  }
}