import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {
  cd=null
  cr=null
  cv=null
  dt=null
  constructor() { }

  ngOnInit() {
  }
  tinhcv(){
    this.cv=(this.cd+this.cr)*2;
    this.dt=this.cd*this.cr;
  }

}
