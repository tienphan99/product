import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-bai6',
  templateUrl: './bai6.component.html',
  styleUrls: ['./bai6.component.css']
})
export class Bai6Component implements OnInit {
  url='https://swapi.co/api/films/';
  inforFilm: any;
  listFilms:any;
  constructor( private http: HttpClient ) { }


  ngOnInit() {
    this.getAllData().subscribe(data=>{
      this.inforFilm=data;
      this.listFilms= this.inforFilm.results;
    })  
  }
  getAllData(){
    return this.http.get(this.url);
  }
}
  


