import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  
  products:any;
  grandTotal:number=0;
  countCart:number=0;
  constructor(private cartService:CartService, private orderService:OrderService, private toast:ToastrService){}

  ngOnInit(){
    this.cartService.getProducts()
    .subscribe((res)=>{
      this.products=res,
      this.grandTotal=this.cartService.getTotalPrice()
      this.countCart=res.length;
    })
  }

  placeOrder(data:any){

      if(localStorage.getItem('user')){

        let userData=localStorage.getItem('user');
        let userParseData= userData && JSON.parse(userData);
        let user=userParseData.user._id;

        let orderInfo={
          shippingInfo:data,
          orderItems:this.products,
          totalPrice:this.grandTotal,
          user:user
       }
          this.orderService.createOrder(orderInfo)

      }
      else{
          this.toast.warning('Please Login before place order')
      }
           
  }


}
