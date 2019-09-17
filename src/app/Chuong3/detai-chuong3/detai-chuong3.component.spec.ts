import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaiChuong3Component } from './detai-chuong3.component';

describe('DetaiChuong3Component', () => {
  let component: DetaiChuong3Component;
  let fixture: ComponentFixture<DetaiChuong3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaiChuong3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaiChuong3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
