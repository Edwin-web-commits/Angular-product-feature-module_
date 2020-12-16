import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import {OrdersRoutingModule} from './orders-routing.module';
import { ViewOrderComponent } from './view-order/view-order/view-order.component'



@NgModule({
  declarations: [ListOrdersComponent, ViewOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule

  ],
  exports:[
    //ListOrdersComponent
  ]
})
export class OrdersModule { }
