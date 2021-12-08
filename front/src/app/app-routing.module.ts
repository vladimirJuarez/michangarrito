import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductIndexComponent } from './products/product-index/product-index.component'
import { EditProductComponent } from './products/edit-product/edit-product.component'
import { CreateProductComponent } from './products/create-product/create-product.component';

const routes: Routes = [
  { path: '', component: ProductIndexComponent },

  { path: 'products/edit/:id', component: EditProductComponent},
  { path: 'products/create', component: CreateProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
