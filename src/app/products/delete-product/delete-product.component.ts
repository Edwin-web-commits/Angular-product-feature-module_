import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Store} from "@ngrx/store";

import * as productActions from "../store/product.actions";
import * as fromProduct from "../store/product.reducer";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
 
  productId=0;
  constructor(private activatedRoute:ActivatedRoute, private store: Store<fromProduct.AppState>) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId=data.id;
    })
  }

}
