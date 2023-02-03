import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent {

  order:any;

  constructor( private orderService:OrderService, private activatedRoute:ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.params.subscribe(
      params=>{
        let id=params['id']
        this.orderService.getOrderById(id)
        .subscribe((data)=>{
           this.order=data.OrderData;
        })
      }
     )
  }

}
