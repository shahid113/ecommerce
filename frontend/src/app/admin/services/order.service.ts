import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }



  getOrderData(){
    return this.http.get<any>('http://localhost:3000/api/order')
  }

  getOrderById(id:string){
    return this.http.get<any>('http://localhost:3000/api/order/view/'+id)
  }
}
