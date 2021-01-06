import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

import {Store, select} from "@ngrx/store";

import * as productActions from "../store/product.actions";
import * as fromProduct from "../store/product.reducer";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productId=0;
 //selectedProduct:Product;


  selectedProduct$ :Observable<Product> ; 
  error$: Observable<String> ;

  /*pname="";
  pcategoryId=0; 
  pdescription="ha";
  productImage="";
  pprice=0;
  pisAvailable=false;
  prating="";
  previews=0;
  pcolor="";
  */

  pname:string;
  pcategoryId:number; 
  pdescription:string;
  productImage:string;
  pprice:number;
  pisAvailable:boolean;
  prating:string;
  previews:number;
  pcolor:string;

  constructor(private router:Router,private activatedRoute:ActivatedRoute, private productsService:ProductsService, private store: Store<fromProduct.AppState>) { }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(data=>{
      this.productId=data.id ;

      /*
      this.productsService.viewProduct(this.productId).subscribe(data=>{
        console.log("my data");
        console.log(data);
       this.selectedProduct=data;
       console.log("selected product");
       console.log(this.selectedProduct.productImg);
      })
      */

        this.store.dispatch(new productActions.loadProduct(this.productId));

    
        this.selectedProduct$= this.store.pipe(select(fromProduct.getCurrentProduct));

        this.selectedProduct$.subscribe(data=>{
        this.productImage=data.productImg;
        this.pname=data.name;
        this.previews=data.reviews;
        this.prating=data.rating;
        this.pprice=data.price;
        this.pisAvailable=data.isAvailable;
        this.pdescription=data.description;
        this.pcolor=data.color;
        this.pcategoryId=data.categoryId;
        
      })
       this.error$ = this.store.pipe(select(fromProduct.getError));

      })
          


         

  }
  updateItem(){
   this.router.navigate(['/products/update-product/'+this.productId]);
  }
  deleteItem(){
    confirm("Delete this item?");
   /* this.productsService.deleteProduct(this.productId).subscribe(data=>{
    
      this.router.navigate(['/products']);
    });
    */
   this.store.dispatch(new productActions.deleteProduct(this.productId));
    
  }

}
