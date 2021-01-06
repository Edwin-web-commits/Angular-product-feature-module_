import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import {OrdersRoutingModule} from './orders-routing.module';
import { ViewOrderComponent } from './view-order/view-order/view-order.component';
import {StoreModule } from "@ngrx/store";

import {ordersReducer} from './store/orders.reducer';
import { EffectsModule } from '@ngrx/effects';
import {ordersEffect} from "./store/orders.effects";

@NgModule({
  declarations: [ListOrdersComponent, ViewOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    StoreModule.forFeature("orders" , ordersReducer),
    EffectsModule.forFeature([ordersEffect])
  ],
  exports:[
    //ListOrdersComponent
    
  ]
})
export class OrdersModule { }
