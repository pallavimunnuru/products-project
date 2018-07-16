import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ProductsService} from './shared/products.service';
import{Product} from './shared/product.interface';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AddNewComponent } from './add-new/add-new.component';
import { Routes, RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes:Routes=[
  {path:'addingNew',component:AddNewComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddNewComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    HttpClientModule,RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,ButtonModule,CalendarModule,BrowserAnimationsModule
  ],
  providers: [ProductsService,HttpModule,
    HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
