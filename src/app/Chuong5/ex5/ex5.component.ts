import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.css']
})
export class Ex5Component implements OnInit {

  constructor() { }
  isSalary
  name
  salary
  gender
  groupAge

  onChangeName() {
    this.name = this.name.trim()
  }

  onChangeGender(gender) {
    this.gender = gender
  }

  onChangeSalary() {
    if (parseInt(this.salary).toString() !== this.salary.toString()) {
      this.isSalary = false
      this.salary = ""
  }
    else {
      this.isSalary = true
      if (this.salary)
        this.salary = parseInt(this.salary)
      else
        this.salary = ""
    }
  }

  ngOnInit() {
    this.salary = ""
  }

}
