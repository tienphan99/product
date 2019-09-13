import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './Chuong I/productlist/productlist.component';
import { DetailproductComponent } from './Chuong I/detailproduct/detailproduct.component';
import { Bai1Component } from './Chuong I/bai1/bai1.component';
import { Bai2Component } from './Chuong I/bai2/bai2.component';
import { Bai3Component } from './Chuong I/bai3/bai3.component';
import { BAI3Service } from './Chuong I/service/BAI3.service';
import { CartService } from './Chuong I/service/cart.service';
import { GioHangComponent } from './Chuong I/giohang/giohang.component';
import { NavBtComponent } from './Chuong I/nav-bt/nav-bt.component';
import { SinhvienComponent } from './Chuong2/sinhvien/sinhvien.component';
import { DetailComponent } from './Chuong2/detail/detail.component';

const routes: Routes = [
  { path: 'Chuong I', component: NavBtComponent},
  { path: 'Chuong I/bai1', component: Bai1Component},
  { path: 'Chuong I/bai2', component: Bai2Component},
  { path: 'Chuong I/bai3', component: Bai3Component},
  { path: 'Chuong I/bai3service', component: BAI3Service},
  { path: 'Chuong I/cart', component: CartService},
  { path: 'Chuong I/giohang', component: GioHangComponent},
  { path: 'Chuong I/productlist', component: ProductlistComponent},
  { path: 'Chuong I/bai3', component: BAI3Service},
  { path: 'products/:productId', component: DetailproductComponent },
  { path: 'Chuong2', component: SinhvienComponent},
  { path: 'Chuong2/student/:id', component: DetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }