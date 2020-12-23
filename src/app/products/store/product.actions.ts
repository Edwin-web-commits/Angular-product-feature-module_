
import {Product} from "../product";
import { Update } from "@ngrx/entity";
//import {Action} from "@ngrx/store";
import { Action as ngrxAction } from "@ngrx/store"

export enum ProductActionTypes{

    LOAD_PRODUCTS = "[Product] Load Products",
    LOAD_PRODUCTS_SUCCESS ="[Product] Load Products Success",
    LOAD_PRODUCTS_FAIL="[Product] Load Products Fail",

    LOAD_PRODUCT= "[Product] Load Product",
    LOAD_PRODUCT_SUCCESS ="[Product] Load Product Success",
    LOAD_PRODUCT_FAIL="[Product] Load Product Fail",

    CREATE_PRODUCT = "[Product] Create Product",
    CREATE_PRODUCT_SUCCESS ="[Product] Create Product Success",
    CREATE_PRODUCT_FAIL="[Product] Create Product Fail",

    UPDATE_PRODUCT = "[Product] Update Product",
    UPDATE_PRODUCT_SUCCESS ="[Product] Update Product Success",
    UPDATE_PRODUCT_FAIL="[Product] Update Product Fail",

    DELETE_PRODUCT= "[Product] Delete Product",
    DELETE_PRODUCT_SUCCESS ="[Product] Delete Product Success",
    DELETE_PRODUCT_FAIL="[Product] Delete Product Fail"
}

export class loadProducts implements ngrxAction {

    readonly type = ProductActionTypes.LOAD_PRODUCTS;


}
export class loadProductsSuccess implements ngrxAction {

    readonly type = ProductActionTypes.LOAD_PRODUCTS_SUCCESS;

    constructor(public payload: Product[]){}
    
}
export class loadProductsFail implements ngrxAction {
    readonly type = ProductActionTypes.LOAD_PRODUCTS_FAIL;

    constructor(public payload: string){}
}
//...
export class loadProduct implements ngrxAction {
    readonly type=ProductActionTypes.LOAD_PRODUCT;

    constructor(public payload: number){}
}
export class loadProductSuccess implements ngrxAction {
    readonly type=ProductActionTypes.LOAD_PRODUCT_SUCCESS;

    constructor(public payload: Product){}
}
export class loadProductFail implements ngrxAction {
    readonly type=ProductActionTypes.LOAD_PRODUCT_FAIL;

    constructor(public payload: string){}
}
//...
export class createProduct implements ngrxAction {
    readonly type=ProductActionTypes.CREATE_PRODUCT;

    constructor(public payload: Product){}
}
export class createProductSuccess implements ngrxAction {
    readonly type=ProductActionTypes.CREATE_PRODUCT_SUCCESS;

    constructor(public payload: Product){}
}
export class createProductFail implements ngrxAction {
    readonly type=ProductActionTypes.CREATE_PRODUCT_FAIL;

    constructor(public payload: string){}
}
//...
export class updateProduct implements ngrxAction {
    readonly type=ProductActionTypes.UPDATE_PRODUCT;

    constructor(public payload: Product){}
}
export class updateProductSuccess implements ngrxAction {
    readonly type=ProductActionTypes.UPDATE_PRODUCT_SUCCESS;

    constructor(public payload: Update<Product>){}
}
export class updateProductFail implements ngrxAction {
    readonly type=ProductActionTypes.UPDATE_PRODUCT_FAIL;

    constructor(public payload: string){}
}
//..
export class deleteProduct implements ngrxAction {
    readonly type=ProductActionTypes.DELETE_PRODUCT;

    constructor(public payload: number){}
}
export class deleteProductSuccess implements ngrxAction {
    readonly type=ProductActionTypes.DELETE_PRODUCT_SUCCESS;

    constructor(public payload: number){}
}
export class deleteProductFail implements ngrxAction {
    readonly type=ProductActionTypes.DELETE_PRODUCT_FAIL;

    constructor(public payload: string){}
}

export type Action =
  | loadProducts
  | loadProductsSuccess
  | loadProductsFail
  | loadProduct
  | loadProductSuccess
  | loadProductFail
  | createProduct
  | createProductSuccess
  | createProductFail
  | updateProduct
  | updateProductSuccess
  | updateProductFail
  | deleteProduct
  | deleteProductSuccess
  | deleteProductFail;

