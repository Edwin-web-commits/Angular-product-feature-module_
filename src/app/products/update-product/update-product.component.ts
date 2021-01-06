import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

import {Store} from "@ngrx/store";

import * as productActions from "../store/product.actions";
import * as fromProduct from "../store/product.reducer";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId=0;
  //productDetails:Product;

   productDetails$:Observable <Product>;
   //productImage:any;
   pname="";
   pcategoryId=0; 
   pdescription="";
   productImage="";
   pprice=0;
   pisAvailable=false;
   prating="";
   previews=0;
   pcolor="";

  
  constructor(private router:Router,private productsService:ProductsService,private activatedRoute:ActivatedRoute, private store:Store<fromProduct.AppState>) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId=data.id;

       this.productDetails$= this.store.select(
        fromProduct.getCurrentProduct
      )
      this.productDetails$.subscribe(data=>{
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
       /*
      this.productsService.viewProduct(this.productId).subscribe(data=>{
        this.productDetails=data; //getting the existing data of the product
      })
      */

    });
  }
  updateProduct(form){

    let newProduct={
      id: this.productId, //this is the current id of the porduct
      name: form.value.product_name,
      categoryId: form.value.product_categoryId,
      description: form.value.product_description,
      //productImg: this.productDetails.productImg,
      productImg:this.productImage,
      price:form.value.product_price,
      isAvailable:form.value.product_availability,
      rating: form.value.product_rating,
      reviews: form.value.product_reviews,
      color: form.value.product_color,


     };
     this.store.dispatch(new productActions.updateProduct(newProduct))
     
     
     this.router.navigate(['/products/product/'+this.productId]);
     /*
    this.productsService.updateProduct(this.productId,newProduct).subscribe(data=>{
      console.log("updated data");
       console.log(data);

      this.router.navigate(['/products/product/'+this.productId]);
    })
    */
   
  }

}
