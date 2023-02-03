import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductObject} from './interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    public searchItems=new BehaviorSubject<any>([]);

  constructor( private http:HttpClient) { }
   

    getAllProducts(page:number){
        return this.http.get<ProductObject>(`http://localhost:3000/api/products?page=${page}&limit=6`);
    }

    featuredProduct(){
      return this.http.get<ProductObject>('http://localhost:3000/api/products?page=1&limit=3')
    }

    getProductDetails(id:string){
      return this.http.get('http://localhost:3000/api/product/'+id);
    }

    searchProduct(value:any){
      this.http.get<any>(`http://localhost:3000/api/search?key=${value}`).subscribe((result)=>{
         this.searchItems.next(result.product);
      })
    }

    



}
