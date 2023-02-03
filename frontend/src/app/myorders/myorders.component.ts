import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent {

     orderData:any;
     
     constructor(private orderService:OrderService, private toast:ToastrService){}

     

     ngOnInit(){
           this.getOrderData()  
     }

     getOrderData(){
          if(localStorage.getItem('user')){
               let userData=localStorage.getItem('user');
               let userParse=userData&& JSON.parse(userData);
               let user_id=userParse.user._id;

               this.orderService.getOrderData(user_id).subscribe((result)=>{
                  this.orderData=result.OrderData;
               })
          }
     }

     cancelOrder(id:string){

            let body={
               'id':id,
               'orderStatus':'Cancelled'
            }

       this.orderService.cancelOrder(body).subscribe((result)=>{
          this.toast.success(result.message)
          this.getOrderData()
        });
     }
}
