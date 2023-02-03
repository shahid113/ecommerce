import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  
   public cartItemList:any=[];
   public productList=new BehaviorSubject<any>([]);

  

  constructor(private http:HttpClient, private toast:ToastrService) {

   }


  ngOnInit(){}
   

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartItemList.push(...product)
    this.productList.next(product)
  }


  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice():number{
    let grandTotal=0;
    this.cartItemList.map((item:any)=>{
      grandTotal+=item.total;
    })
    return grandTotal;
  }

  removeCartItem(product:any){

    console.log(product._id)
    this.cartItemList.map((item:any, index:any)=>{
      if(product._id===item._id){
        this.cartItemList.splice(index, 1)
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList)
    this.productList.next(this.cartItemList)
  }


}
