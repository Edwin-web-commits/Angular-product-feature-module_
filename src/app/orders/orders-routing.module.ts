import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListOrdersComponent} from './list-orders/list-orders.component';
import { ViewOrderComponent } from './view-order/view-order/view-order.component';



const routes: Routes=[
    {path:'',component:ListOrdersComponent},
    {path:'view-order/:id',component:ViewOrderComponent}
]

@NgModule({
 imports:[RouterModule.forChild(routes)],
 exports:[RouterModule]
})
export class OrdersRoutingModule {}