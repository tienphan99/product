import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import {Location} from '@angular/common'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) { }
  product;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = parseInt(params.get('id'))
      console.log(id)
      if (!id) {
        this.location.replaceState("/student/1")
        id = 1
      }


    })

  }

  }


