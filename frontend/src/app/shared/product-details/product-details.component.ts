import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  product:any;
  items:any=[];
  remove:boolean=false;
  productQuantity:number=1;

    constructor(private productService:ProductService, 
    private activatedRoute:ActivatedRoute
    , private toast:ToastrService, private cartService:CartService){}


  ngOnInit(){
    this.activatedRoute.params.subscribe(
     params=>{
       let id=params['id']
       this.productService.getProductDetails(id)
       .subscribe((data:any)=>{
        this.product=data.product;
       })
     }
    )
}


quantity(value:string){
  if(this.productQuantity<20 && value==='plus'){
   this.productQuantity+=1;
  }

  if(this.productQuantity>1 && value==='min'){
   this.productQuantity-=1;
  }
}


addToCart(product:any){
  let productData={
    ...product,
    qty:this.productQuantity,
    total:product.price*this.productQuantity
  }
 this.cartService.addtoCart(productData);
 this.remove=true;
}

removeItem(item:any){
   this.cartService.removeCartItem(item);
   this.remove=false;
}



}
