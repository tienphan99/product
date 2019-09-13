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
import { BAI3Service } from './Chuong I/service/BAI3.service';
import { CartService } from './Chuong I/service/cart.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { GioHangComponent } from './Chuong I/giohang/giohang.component';
import { NavBtComponent } from './Chuong I/nav-bt/nav-bt.component';
import { SinhvienComponent } from './Chuong2/sinhvien/sinhvien.component';
import { DetailComponent } from './Chuong2/detail/detail.component';




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
  providers: [BAI3Service,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
