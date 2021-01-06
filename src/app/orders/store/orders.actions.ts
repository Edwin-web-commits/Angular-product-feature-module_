import {Order} from "../order";

import { Action as ngrxAction } from "@ngrx/store"

export enum OrdersActionTypes{

    LOAD_ORDERS = "[Order] Load Orders",
    LOAD_ORDERS_SUCCESS ="[Order] Load Orders Success",
    LOAD_ORDERS_FAIL="[Order] Load Orders Fail",

    LOAD_ORDER= "[Order] Load Order",
    LOAD_ORDER_SUCCESS ="[Order] Load Order Success",
    LOAD_ORDER_FAIL="[Order] Load Order Fail",

    DELETE_ORDER= "[Order] Delete Order",
    DELETE_ORDER_SUCCESS ="[Order] Delete Order Success",
    DELETE_ORDER_FAIL="[Order] Delete Order Fail"
 
}

export class LoadOrders implements ngrxAction{
  readonly type=OrdersActionTypes.LOAD_ORDERS   
    
}
export class LoadOrdersSuccess implements ngrxAction{
  readonly type=OrdersActionTypes.LOAD_ORDERS_SUCCESS

   constructor(public payload : Order[]){}
}

export class LoadOrdersFail implements ngrxAction{
    readonly type=OrdersActionTypes.LOAD_ORDERS_FAIL

    constructor(public payload: string){}
}
//
export class LoadOrder implements ngrxAction{
    readonly type=OrdersActionTypes.LOAD_ORDER  
    constructor(public payload : number){}
  }
  export class LoadOrderSuccess implements ngrxAction{
    readonly type=OrdersActionTypes.LOAD_ORDER_SUCCESS
  
     constructor(public payload : Order){}
  }
  
  export class LoadOrderFail implements ngrxAction{
      readonly type=OrdersActionTypes.LOAD_ORDER_FAIL
  
      constructor(public payload: string){}
  }
  //
  export class deleteOrder implements ngrxAction {
    readonly type=OrdersActionTypes.DELETE_ORDER;

    constructor(public payload: number){}
}
export class deleteOrderSuccess implements ngrxAction {
    readonly type=OrdersActionTypes.DELETE_ORDER_SUCCESS;

    constructor(public payload: number){}
}
export class deleteOrderFail implements ngrxAction {
    readonly type=OrdersActionTypes.DELETE_ORDER_FAIL;

    constructor(public payload: string){}
}

  export type Action =
  LoadOrders|
  LoadOrdersFail|
   LoadOrdersSuccess|
   LoadOrder|
   LoadOrderFail|
   LoadOrderSuccess|
   deleteOrder|
   deleteOrderSuccess|
   deleteOrderFail ;