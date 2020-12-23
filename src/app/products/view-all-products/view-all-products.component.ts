import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

import {Store,select} from "@ngrx/store";

import * as productActions from "../store/product.actions";
import * as fromProduct from "../store/product.reducer";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {
 //productsList:Product;

  products$: Observable<Product[]>;
  error$: Observable<String>;

  constructor(private productsService: ProductsService, private store: Store<fromProduct.AppState>) { }

  ngOnInit(): void {

    this.store.dispatch(new productActions.loadProducts());
    this.products$ = this.store.pipe(select(fromProduct.getProducts));
    this.error$ = this.store.pipe(select(fromProduct.getError));

    

/*
   this.productsService.viewAllProducts().subscribe(data=>{
     console.log("my data");
     console.log(data);
     this.productsList=data;
   });
   */
  }

}
