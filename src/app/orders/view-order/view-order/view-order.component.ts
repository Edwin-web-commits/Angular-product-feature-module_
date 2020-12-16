import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../order';
import { OrdersService } from '../../orders.service';



@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
 orderId=0;

 order:Order;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ordersService:OrdersService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.orderId=data.id;

      console.log("order id");
      console.log(this.orderId);
      this.ordersService.viewOrder(this.orderId).subscribe(data=>{
        console.log("order selected");
        console.log(data.id);
        this.order=data;
        console.log("order selected end");
        
      })
    })
  }
  deleteOrder(){

    confirm("Delete this order?");
    this.ordersService.deleteOrder(this.orderId).subscribe(data=>{
      console.log("Order deleted");
      this.router.navigate(['/orders']);
    })
  }

}
