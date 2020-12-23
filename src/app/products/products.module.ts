import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import {productReducer} from './store/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import {productEffect} from './store/product.effects';


@NgModule({
  declarations: [ProductsComponent, CreateProductComponent, ViewProductComponent, ViewAllProductsComponent, UpdateProductComponent, DeleteProductComponent, ViewAllProductsByDateComponent, ViewAllProductsByCategoryComponent],
  imports: [
    FormsModule,
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature("products" , productReducer),
    EffectsModule.forFeature([productEffect])

  ]
})
export class ProductsModule { }
