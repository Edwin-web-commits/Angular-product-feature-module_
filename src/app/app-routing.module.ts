import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { ViewAllProductsComponent } from './products/view-all-products/view-all-products.component';
import { ViewProductComponent } from './products/view-product/view-product.component';

const routes: Routes = [{ path: '', component:ViewAllProductsComponent},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)}
  // { path: 'orders', component:ListOrdersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
