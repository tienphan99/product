import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailbai6Component } from './detailbai6.component';

describe('Detailbai6Component', () => {
  let component: Detailbai6Component;
  let fixture: ComponentFixture<Detailbai6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detailbai6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detailbai6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
