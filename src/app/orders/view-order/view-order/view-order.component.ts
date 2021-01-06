import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../../order';
import { OrdersService } from '../../orders.service';

import {Store, select} from "@ngrx/store"
import * as fromOrders from "../../store/orders.reducer"
import * as ordersAction from "../../store/orders.actions"



@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
 orderId=0;

 //order:Order;
 order$: Observable<Order>;

  orderName:string;
  orderDescription:string;
  orderProductImage:string;
  orderColor:string;
  orderQuantity;
  orderNo:string ;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ordersService:OrdersService, private store: Store<fromOrders.AppState>) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.orderId=data.id;
 
     /* console.log("order id");
      console.log(this.orderId);
      this.ordersService.viewOrder(this.orderId).subscribe(data=>{
        console.log("order selected");
        console.log(data.id);
        this.order=data;
        console.log("order selected end");
       
      })
       */
      this.store.dispatch(new ordersAction.LoadOrder(this.orderId));
      this.order$= this.store.pipe(select(fromOrders.getCurrentOrder));

      this.order$.subscribe(order =>{
         this.orderName= order.name;
         this.orderNo= order.orderNo;
         this.orderDescription = order.description;
         this.orderQuantity= order.quantity;
         this.orderColor = order.color;
         this.orderProductImage = order.productImg;


      })
    })
  }
  deleteOrder(){

    /* confirm("Delete this order?");
    this.ordersService.deleteOrder(this.orderId).subscribe(data=>{
      console.log("Order deleted");
      this.router.navigate(['/orders']);
    })
    */
   this.store.dispatch(new ordersAction.deleteOrder(this.orderId));

  }

}
