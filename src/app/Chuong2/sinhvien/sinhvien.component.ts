import { Component, OnInit } from '@angular/core';
import { students } from '../sinh vien';

@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})
export class SinhvienComponent implements OnInit {
  config: any;
  searchText;
  listStudents = []

  constructor() { 
    this.config = {
      itemsPerPage: 3,
      currentPage: 0,
      totalItems: this.listStudents.length
  };

  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  onDeleteStudent(id) {
    let isDelete = confirm("Bạn có chắc chắn xóa sinh viên này?")
    if (isDelete) {
      let temp = this.listStudents.filter(student => {
        return student.id !== id
      })
      this.listStudents = [...temp]
    }
  }
  pageOfItems: Array<any>;

  ngOnInit() {
    this.listStudents = students.map((student, i) => (student));
  }
  onChangePage(pageOfItems: Array<any>) {
    // cập nhật trang hiện tại của các mục
    pageOfItems = pageOfItems;
}
}
