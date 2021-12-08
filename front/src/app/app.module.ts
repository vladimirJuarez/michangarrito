import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductIndexComponent } from './products/product-index/product-index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { HttpClientModule } from '@angular/common/http'
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductFormComponent } from './products/product-form/product-form.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductIndexComponent,
    MenuComponent,
    GenericListComponent,
    CreateProductComponent,
    EditProductComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
