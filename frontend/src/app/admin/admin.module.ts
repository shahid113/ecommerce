import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddProductComponent } from './add-product/add-product.component';

import { ProductTableComponent } from './product-table/product-table.component';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    AddProductComponent,
    ProductTableComponent,
    ViewProductComponent,
    UpdateProductComponent,
    AdminHomeComponent,
    OrdersComponent,
    UsersComponent,
    ViewOrdersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    NgxPrintModule
    
  ]
})
export class AdminModule { }
