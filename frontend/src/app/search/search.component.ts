import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
   
    products:any;

  constructor(private productService:ProductService){}

  ngOnInit(){
     this.productService.searchItems.subscribe((result)=>{
        this.products=result;
     })
  }

}
