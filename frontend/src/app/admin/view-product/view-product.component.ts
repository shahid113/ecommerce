import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
        
     
     product:any;
    
     constructor(private productService:ProductService, private activatedRoute:ActivatedRoute){}

     ngOnInit(){
         this.activatedRoute.params.subscribe(
          params=>{
            let id=params['id']
            this.productService.getProductDetails(id)
            .subscribe((data)=>{
               this.product=data;
            })
          }
         )
     }
}
