import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import {ProductsService} from "../products.service";
import * as productActions from "./product.actions";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import {Product} from "../product";


 @Injectable()
export class productEffect {

    constructor(private productService:ProductsService, private actions$: Actions){}

    @Effect()
    loadProducts$: Observable<Action> = this.actions$.pipe(
        ofType<productActions.loadProducts>(
          productActions.ProductActionTypes.LOAD_PRODUCTS
        ),
        mergeMap((action: productActions.loadProducts) =>
          this.productService.viewAllProducts().pipe(
            map(
              (products: Product[]) =>
                new productActions.loadProductsSuccess(products)
            ),
            catchError(err => of(new productActions.loadProductsFail(err)))
          )
        )
      );

      @Effect()
      loadProduct$: Observable<Action> = this.actions$.pipe(
        ofType<productActions.loadProduct>(
          productActions.ProductActionTypes.LOAD_PRODUCT
        ),
        mergeMap((action: productActions.loadProduct) =>
          this.productService.viewProduct(action.payload).pipe(
            map(
              (product: Product) =>
                new productActions.loadProductSuccess(product)
            ),
            catchError(err => of(new productActions.loadProductFail(err)))
          )
        )
      );


      @Effect()
            createProduct$: Observable<Action> = this.actions$.pipe(
                ofType<productActions.createProduct>(
                productActions.ProductActionTypes.CREATE_PRODUCT
                ),
                 //for every createProduct action,we  get the action paylaod and it will give us a product.
                map((action: productActions.createProduct)=> action.payload),

                //for every product (product that we got from above action payload) ,we call createProduct fuction from productService and pass the product.
                mergeMap((product: Product) => 
                 this.productService.createProduct(product).pipe(
                    //then for every product we dispath a new createProductSuccess and pass the product
                    map(
                        (newProduct: Product) =>
                         //dispatching new action (createProductSuccess) and passing the product
                          new productActions.createProductSuccess(newProduct)
                    )
                    
                 ,catchError(err => of(new productActions.createProductFail(err))) //dispatching new action (createProductFail) and passing the error
                    )
                  )
                );
       @Effect()
       updateProduct$: Observable<Action> =this.actions$.pipe(
           ofType<productActions.updateProduct>(
               productActions.ProductActionTypes.UPDATE_PRODUCT
           ),map((action: productActions.updateProduct)=> action.payload),
           mergeMap((product: Product) =>this.productService.updateProduct(product).pipe(
              map(
                  (updatedProduct: Product) => new productActions.updateProductSuccess({
                    id: Number(updatedProduct.id), 
                    changes: updatedProduct //changes that have been made.Entity adapter will update the store
                  })  
              ),catchError(err => of(new productActions.updateProductFail(err)))

           )
          )
        );       
        
        
        @Effect()
            deleteProduct$: Observable<Action> = this.actions$.pipe(
                ofType<productActions.deleteProduct>(
                productActions.ProductActionTypes.DELETE_PRODUCT
                ),
                map((action: productActions.deleteProduct)=> action.payload),

                mergeMap((id: number) => 
                   this.productService.deleteProduct(id).pipe(
                  
                    map(() =>
                          new productActions.deleteProductSuccess(id)
                          
                    ),catchError(err => of(new productActions.deleteProductFail(err))) 
                    )
                  )
                );

}