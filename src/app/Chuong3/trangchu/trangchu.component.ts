import { Component, OnInit } from '@angular/core';
import { dulieu } from '../dulieu'


@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {

  constructor() { }
  listProducts = []
  ngOnInit() {
    this.listProducts = [...dulieu]
    
  }

}
