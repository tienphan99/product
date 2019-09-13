import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBtComponent } from './nav-bt.component';

describe('NavBtComponent', () => {
  let component: NavBtComponent;
  let fixture: ComponentFixture<NavBtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
