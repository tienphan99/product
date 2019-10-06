import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './Chuong I/productlist/productlist.component';
import { DetailproductComponent } from './Chuong I/detailproduct/detailproduct.component';
import { Bai1Component } from './Chuong I/bai1/bai1.component';
import { Bai2Component } from './Chuong I/bai2/bai2.component';
import { Bai3Component } from './Chuong I/bai3/bai3.component';
import { GioHangComponent } from './Chuong I/giohang/giohang.component';
import { NavBtComponent } from './Chuong I/nav-bt/nav-bt.component';
import { SinhvienComponent } from './Chuong2/sinhvien/sinhvien.component';
import { DetailComponent } from './Chuong2/detail/detail.component';
import { HomeComponent } from './Chuong3/home/home.component';
import { TrangchuComponent } from './Chuong3/trangchu/trangchu.component';
import { DetaiChuong3Component } from './Chuong3/detai-chuong3/detai-chuong3.component';
import { Nav1Component } from './Chuong5/nav1/nav1.component';
import { Ex1Component } from './Chuong5/ex1/ex1.component';
import { Ex2Component } from './Chuong5/ex2/ex2.component';
import { Ex3Component } from './Chuong5/ex3/ex3.component';
import { Ex4Component } from './Chuong5/ex4/ex4.component';
import { Ex5Component } from './Chuong5/ex5/ex5.component';

const routes: Routes = [
  { path: 'Chuong I', component: NavBtComponent},
  { path: 'Chuong I/bai1', component: Bai1Component},
  { path: 'Chuong I/bai2', component: Bai2Component},
  { path: 'Chuong I/bai3', component: Bai3Component},
 
  { path: 'Chuong I/giohang', component: GioHangComponent},
  { path: 'Chuong I/productlist', component: ProductlistComponent},
 
  { path: 'products/:productId', component: DetailproductComponent },
  { path: 'Chuong2', component: SinhvienComponent},
  { path: 'Chuong2/student/:id', component: DetailComponent},
  
  { path: 'lab/trangchu', component: HomeComponent},
  { path: 'Chuong3', component: TrangchuComponent},
  { path: 'Chuong3/product/:id', component: DetaiChuong3Component},

  { path: 'Chuong5', component: Nav1Component},
  { path: 'Chuong5/ex1', component: Ex1Component},
  { path: 'Chuong5/ex2', component: Ex2Component},
  { path: 'Chuong5/ex3', component: Ex3Component},
  { path: 'Chuong5/ex4', component: Ex4Component},
  { path: 'Chuong5/ex5', component: Ex5Component},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }