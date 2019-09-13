import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {
  students = [ 
    {
            fullName: 'Phan Văn Tiến',       
            birthday: '20-01-1999',       
            gender: 'Nam',       
            photo: '../../assets/images/tien.jpg',       
            mark: 8.5     
      },     
    {       
      fullName: 'Phan thị nở',       
      birthday: '20-12-1999',       
      gender: 'Nữ',       
      photo: '../../assets/images/girl.jpg',       
      mark: 8.5     
    },     
    {       
      fullName: 'Nguyễn khá Bảnh',       
      birthday: '20-01-2000',       
      gender: 'Nam',       
      photo: '../../assets/images/man.jpg ',       
      mark: 8.5     
    },   
  ]
  constructor() { }

  ngOnInit() {
  }

}



