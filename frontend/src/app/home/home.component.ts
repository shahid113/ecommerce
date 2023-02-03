import { Component } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Doc} from '../services/interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  productList:Doc[]=[];
  trendy:Doc[]=[];

  page:number=1;
  count:number=0;
  tableSize:number=3;

  constructor(private productService:ProductService){

  }

  ngOnInit(){
        
       this.fetchProducts(this.page)

       this.productService.featuredProduct().subscribe((result)=>{
           this.trendy=result.products.docs
       })
  }

  fetchProducts(page:number){
    this.productService.getAllProducts(page).subscribe((result)=>{
      this.productList=result.products.docs;
      this.count=result.products.totalDocs
      this.tableSize=result.products.limit;
    })
  }

  onTableDataChange(event:any){
            
        this.page=event
        this.fetchProducts(this.page)
   }

}
