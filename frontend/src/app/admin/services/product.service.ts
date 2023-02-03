import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { ProductObject } from 'src/app/services/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http:HttpClient) { }

  

  getProducts(page:number){
     return this.http.get<ProductObject>(`http://localhost:3000/api/products?page=${page}&limit=8`);
  }

  createProduct(data:any){
    return this.http.post<any>('http://localhost:3000/api/product/new', data)
  }

  deleteProduct(id:string){
       return this.http.delete('http://localhost:3000/api/product/'+id)
  }

  getProductDetails(id:string){
    return this.http.get('http://localhost:3000/api/product/'+id);
  }

  updateProduct(data:any){
    return this.http.put(`http://localhost:3000/api/product/${data.id}`, data);
  }
  

}
