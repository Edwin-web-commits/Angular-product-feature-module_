import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Order} from './order';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  getOrders():Observable<Order[]>{
    const productUrl='http://localhost:3000/orders';
 
    return this.http.get<Order[]>(productUrl); //will return an observable of type Order
  }
  viewOrder(orderId):Observable<Order> {
    const productUrl="http://localhost:3000/orders/"+orderId;
    //const productUrl="http://localhost:3000/orders/?orderNo="+orderNo;
    
     return this.http.get<Order>(productUrl); //will return an observable of type order
   }
   deleteOrder(orderId):Observable<Order> {
    const productUrl="http://localhost:3000/orders/"+orderId;
   
   return  this.http.delete<Order>(productUrl); //will return an observable of type Product
   }
}
