import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import {OrdersService } from '../orders.service';
import {Store ,select} from "@ngrx/store"
import *  as ordersAction from "../store/orders.actions";
import * as fromOrders from "../store/orders.reducer";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  //ordersList:Order;
  ordersList$:Observable<Order[]>;
  constructor(private ordersService:OrdersService, private store: Store<fromOrders.AppState>) { }

  ngOnInit(): void {
  /*  this.ordersService.getOrders().subscribe(data=>{
      console.log("my orders");
      console.log(data);
      this.ordersList=data;
    })
    */
   this.store.dispatch(new ordersAction.LoadOrders);
   this.ordersList$=this.store.pipe(select(fromOrders.getOrders))
    
  }

}
