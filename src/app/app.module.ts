import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RatingModule } from 'ng-starrating';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductlistComponent } from './Chuong I/productlist/productlist.component';
import { DetailproductComponent } from './Chuong I/detailproduct/detailproduct.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { Bai1Component } from './Chuong I/bai1/bai1.component';
import { Bai2Component } from './Chuong I/bai2/bai2.component';
import { Bai3Component } from './Chuong I/bai3/bai3.component';
import { CartService } from './services/cart.service';
import { CategorieService } from './services/categories.service';
import { NgxPaginationModule } from 'ngx-pagination';
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
import { Bai6Component } from './Chuong6/bai6/bai6.component';
import { Detailbai6Component } from './Chuong6/detailbai6/detailbai6.component';
import { Bai7Component } from './Chuong7/bai7/bai7.component';
import { Home1Component } from './Chuong8/home1/home1.component';
import { DetailGuitarComponent } from './Chuong8/detail-guitar/detail-guitar.component';
import { CartComponent } from './Chuong8/cart/cart.component';
import { CheckoutComponent } from './Chuong8/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    DetailproductComponent,
    NavComponent,
    Bai1Component,
    Bai2Component,
    Bai3Component,
    GioHangComponent,
    NavBtComponent,
    SinhvienComponent,
    DetailComponent,
    HomeComponent,
    TrangchuComponent,
    DetaiChuong3Component,
    Nav1Component,
    Ex1Component,
    Ex2Component,
    Ex3Component,
    Ex4Component,
    Ex5Component,
    Bai6Component,
    Detailbai6Component,
    Bai7Component,
    Home1Component,
    DetailGuitarComponent,
    CartComponent,
    CheckoutComponent,
   
    
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    RatingModule,
    
  ],
  providers: [CartService,CategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
