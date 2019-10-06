import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name
  salary
  gender
  groupAge
  onChangeGender(gender) {
    this.gender = gender
  }
}
