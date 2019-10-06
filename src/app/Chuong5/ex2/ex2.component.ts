import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {
  ttsv = {
    hvt: null,
    ngaysinh: null,
    gioitinh: null,
    diem: null,
    hocluc: null
  }
  constructor() { }

  ngOnInit() {
  }
  seen() {
    if (this.ttsv.diem >= 5)
      this.ttsv.hocluc = "Chúc mừng bạn đã đậu"
    if (this.ttsv.diem < 5)
      this.ttsv.hocluc = "Bạn đã rớt"
  }

}
