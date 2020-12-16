import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import {OrdersService } from '../orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  ordersList:Order;
  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe(data=>{
      console.log("my orders");
      console.log(data);
      this.ordersList=data;
    })
  }

}
