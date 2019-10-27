import { Component, OnInit } from '@angular/core';
import { Student } from '../student'
@Component({
  selector: 'app-bai7',
  templateUrl: './bai7.component.html',
  styleUrls: ['./bai7.component.css']
})
export class Bai7Component implements OnInit {
  showFormEdit: boolean = false; selectStudentId = -1;
  isEdit;
  formStudent = {
    id: null,
    fullName: null,
    birthday: null,
    mark: null,

  };
  students: Student[] = [
    {
      id: 1,
      fullName: 'Nguyễn văn tèo',
      birthday: new Date(2019, 6, 30),
      mark: 4
    },
    {
      id: 2,
      fullName: 'Phan thị nở',
      birthday: new Date(2019, 2, 29),
      mark: 8

    },

  ];

  constructor() {

  }

  ngOnInit() {
    this.isEdit = false
  }
  toogle() {
    var x = document.getElementById("card");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    console.log(document.getElementById("card"))
  }

  sua(id) {
    const student = this.students.find(stu => stu.id == id)
    this.formStudent = {
      id: student.id,
      fullName: student.fullName,
      birthday: student.birthday,
      mark: student.mark,
    }
    this.isEdit = true
  }

  clearInfo() {
    this.formStudent = {
      id: null,
      fullName: null,
      birthday: null,
      mark: null,
    }
    this.isEdit = false
  }

  saveInfo(id) {
    const index = this.students.findIndex(i => i.id == id)
    this.students[index] = this.formStudent
    this.isEdit = false
    console.log('edit');

  }
  createInfo() {
    console.log('create');

  }
  removeWord(id: Number) {
    this.students = this.students.filter(student => student.id !== id)
  }

  onChangeName(name) {
    console.log('input name');
    this.formStudent.fullName = name
  }
}