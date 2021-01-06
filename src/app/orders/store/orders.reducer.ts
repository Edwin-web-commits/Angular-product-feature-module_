import * as OrdersActions from "../store/orders.actions"
import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromRoot from "../../state/app-state";

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import {Order } from "../order";

export interface ordersState extends EntityState<Order>{
    selectedOrderId : number | null ,
    loading: boolean,
    loaded: boolean,
    error: string
}

export interface AppState extends fromRoot.AppState{
  orders: ordersState
}

export const ordersAdapter: EntityAdapter<Order>= createEntityAdapter<Order>({
    
})
export const defaultOrder: ordersState = {
    ids: [],
    entities: {},
    selectedOrderId: null,
    loading: false,
    loaded: false,
    error: ""
  };

  export const initialState = ordersAdapter.getInitialState(defaultOrder);

  export function ordersReducer(state=initialState , action:OrdersActions.Action): ordersState {
      switch(action.type){

       case OrdersActions.OrdersActionTypes.LOAD_ORDERS_SUCCESS:
           return ordersAdapter.addAll(action.payload,{
             ...state,
             loading:true,
             loaded:false
           });
        case OrdersActions.OrdersActionTypes.LOAD_ORDERS_FAIL:
            return {
                ...state,
                entities: {},
                loading:false,
                loaded:false,
                error:action.payload
            }  
         
        case OrdersActions.OrdersActionTypes.LOAD_ORDER_SUCCESS:
            return ordersAdapter.addOne(action.payload,{
                ...state,
                loading:false,
                loaded:true
            })  ;
        case OrdersActions.OrdersActionTypes.LOAD_ORDER_FAIL:
            return {
                ...state,
                loading:false,
                loaded:false,
                error:action.payload

            }   
            
            
        case OrdersActions.OrdersActionTypes.DELETE_ORDER_SUCCESS: {
                return ordersAdapter.removeOne(action.payload, state);
              }
        case OrdersActions.OrdersActionTypes.DELETE_ORDER_FAIL: {
                return {
                  ...state,
                  error: action.payload
                };
              }    
             
         default: {
                return state;
              }
      }
  }
  //selectors

  const getOrderFeatureState = createFeatureSelector<ordersState>(
    "orders"
  );

export const getOrders = createSelector(
    getOrderFeatureState,
    ordersAdapter.getSelectors().selectAll
  );
  
  export const getOrdersLoading = createSelector(
    getOrderFeatureState,
    (state: ordersState) => state.loading
  );
  
  export const getOrdersLoaded = createSelector(
    getOrderFeatureState,
    (state: ordersState) => state.loaded
  );
  
  export const getError = createSelector(
    getOrderFeatureState,
    (state: ordersState) => state.error
  );
  
  export const getCurrentOrderId = createSelector(
    getOrderFeatureState,
    (state: ordersState) => state.selectedOrderId
  );
  export const getCurrentOrder = createSelector(
    getOrderFeatureState,
    getCurrentOrderId,
    state => state.entities[state.selectedOrderId]
  );