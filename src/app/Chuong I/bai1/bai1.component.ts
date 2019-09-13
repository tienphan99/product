import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {
  student = {
    fullName:'Phan Văn Tiến',
    birthday:'20-01-1999',
    gender :'Nam',
    photo :'../assets/tien.jpg',
    mark:7.5
    }

  constructor() { }

  ngOnInit() {
  }

}
