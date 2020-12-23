import * as productActions from "./product.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromRoot from "../../state/app-state";

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import {Product } from "../product";

export interface productState extends EntityState<Product>{
    selectedProductId : number | null ,
    loading: boolean,
    loaded: boolean,
    error: string
}

export interface AppState extends fromRoot.AppState{
  products: productState
}

export const productAdapter: EntityAdapter<Product>= createEntityAdapter<Product>({
    
})
export const defaultProduct: productState = {
    ids: [],
    entities: {},
    selectedProductId: null,
    loading: false,
    loaded: false,
    error: ""
  };

  export const initialState = productAdapter.getInitialState(defaultProduct);

  export function productReducer(state=initialState , action:productActions.Action): productState {
    switch (action.type) {
      case productActions.ProductActionTypes.LOAD_PRODUCTS_SUCCESS: {
        return productAdapter.addAll(action.payload, {
          ...state,
          loading: false,
          loaded: true
        });
       } 

      case productActions.ProductActionTypes.LOAD_PRODUCTS_FAIL:{
          return  {
            ...state,
            entities: {},
            loading: false,
            loaded: false,
            error: action.payload
          };
      }
      case productActions.ProductActionTypes.CREATE_PRODUCT_SUCCESS:{
          return productAdapter.addOne(action.payload,state);
      }
      case productActions.ProductActionTypes.CREATE_PRODUCT_FAIL:{
          return {
              ...state,
              error:action.payload
          }
      }
      case productActions.ProductActionTypes.LOAD_PRODUCT_SUCCESS: {
        return productAdapter.addOne(action.payload, {
          ...state,
          selectedProductId: action.payload.id
        });
      }
      case productActions.ProductActionTypes.LOAD_PRODUCT_FAIL: {
        return {
          ...state,
          error: action.payload
        };
      }
      case productActions.ProductActionTypes.UPDATE_PRODUCT_SUCCESS: {
        return productAdapter.updateOne(action.payload, state);
      }
      case productActions.ProductActionTypes.UPDATE_PRODUCT_FAIL: {
        return {
          ...state,
          error: action.payload
        };
      }
      case productActions.ProductActionTypes.DELETE_PRODUCT_SUCCESS: {
        return productAdapter.removeOne(action.payload, state);
      }
      case productActions.ProductActionTypes.DELETE_PRODUCT_FAIL: {
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


const getProductFeatureState = createFeatureSelector<productState>(
    "products"
  );

export const getProducts = createSelector(
    getProductFeatureState,
    productAdapter.getSelectors().selectAll
  );
  
  export const getProductsLoading = createSelector(
    getProductFeatureState,
    (state: productState) => state.loading
  );
  
  export const getProductsLoaded = createSelector(
    getProductFeatureState,
    (state: productState) => state.loaded
  );
  
  export const getError = createSelector(
    getProductFeatureState,
    (state: productState) => state.error
  );
  
  export const getCurrentProductId = createSelector(
    getProductFeatureState,
    (state: productState) => state.selectedProductId
  );
  export const getCurrentProduct = createSelector(
    getProductFeatureState,
    getCurrentProductId,
    state => state.entities[state.selectedProductId]
  );
  