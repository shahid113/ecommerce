import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UsersComponent } from './users/users.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [{ path: '', component: AdminComponent,
children:[
  {path:'', component:AdminHomeComponent},
  {path:'products', component:ProductTableComponent},
  {path:'add-product', component:AddProductComponent },
  {path:'orders', component:OrdersComponent},
  {path:'orders/view/:id', component:ViewOrdersComponent},
  {path:'users', component:UsersComponent},
  {path:'products/view/:id', component:ViewProductComponent},
  {path:'products/update/:id', component:UpdateProductComponent}]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
