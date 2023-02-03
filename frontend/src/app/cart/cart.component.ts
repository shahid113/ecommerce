import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
    
  public products:any=[];
  public grandTotal:number=0;

  constructor(private cartService:CartService){}


  ngOnInit(){
    this.cartService.getProducts()
    .subscribe((res)=>{
      this.products=res,
      this.grandTotal=this.cartService.getTotalPrice()
    })
  }

  removeItem(item:any){
    this.cartService.removeCartItem(item)
  }

  emptycart(){
    this.cartService.removeAllCart()
  }

  checkout(value:number){
     
  }
}
