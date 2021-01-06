import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import {OrdersService} from "../orders.service"
import * as ordersActions from "../store/orders.actions"

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import {Order} from "../order"


 @Injectable()
export class ordersEffect {

    constructor(private ordersService:OrdersService, private actions$: Actions){}

    @Effect()
    loadOrders$: Observable<Action> = this.actions$.pipe(
        ofType<ordersActions.LoadOrders>(
          ordersActions.OrdersActionTypes.LOAD_ORDERS
        ),
        mergeMap((action: ordersActions.LoadOrders) =>
          this.ordersService.getOrders().pipe(
            map(
              (orders: Order[]) =>
                new ordersActions.LoadOrdersSuccess(orders)
            ),
            catchError(err => of(new ordersActions.LoadOrdersFail(err)))
          )
        )
      );

      @Effect()
      loadOrder$: Observable<Action> = this.actions$.pipe(
          ofType<ordersActions.LoadOrder>(
              ordersActions.OrdersActionTypes.LOAD_ORDER
          ),
          mergeMap((action: ordersActions.LoadOrder) =>
             this.ordersService.viewOrder(action.payload).pipe(
                 map((order:Order) =>
                 new ordersActions.LoadOrderSuccess(order)
                 ),
                 catchError(err => of(new ordersActions.LoadOrderFail(err)))
              )
           )
      );

      @Effect()
      deleteOrder$: Observable<Action> = this.actions$.pipe(
          ofType<ordersActions.deleteOrder>(
          ordersActions.OrdersActionTypes.DELETE_ORDER
          ),
          map((action: ordersActions.deleteOrder)=> action.payload),

          mergeMap((id: number) => 
             this.ordersService.deleteOrder(id).pipe(
            
              map(() =>
                    new ordersActions.deleteOrderSuccess(id)
                    
              ),catchError(err => of(new ordersActions.deleteOrderFail(err))) 
              )
            )
          );
}