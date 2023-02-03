import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orders:any;
  
  constructor(private orderService:OrderService){}


  ngOnInit(){
       this.orderService.getOrderData().subscribe((result)=>{
          this.orders=result.OrderData;
       })
  }
}
