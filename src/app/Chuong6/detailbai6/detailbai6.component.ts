import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-detailbai6',
  templateUrl: './detailbai6.component.html',
  styleUrls: ['./detailbai6.component.css']
})
export class Detailbai6Component implements OnInit {
  film: any;
  constructor(private router: ActivatedRoute, private http:HttpClient ) { }
  

  ngOnInit() {
    const url = this.router.snapshot.paramMap.get('url');
    this.getFilmId(url).subscribe(data =>{
      this.film=data;
    })
  }
  getFilmId(url:string)
  {
    return this.http.get(url);
  }
  Onback(){
    window.history.back();
    }    

}
