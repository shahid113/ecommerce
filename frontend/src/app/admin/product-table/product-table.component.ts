import { Component} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Doc } from 'src/app/services/interface';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {



  allProd:Doc[]=[];

  page:number=1;
  count:number=0;
  tableSize:number=3;



  constructor (private products:ProductService, private toast:ToastrService){}


  ngOnInit(){
    this.getProducts(this.page);
  }

  getProducts(page:number){
    this.products.getProducts(page).subscribe((result)=>{
      this.allProd=result.products.docs;
      this.count=result.products.totalDocs
      this.tableSize=result.products.limit;
    })
  }

  onTableDataChange(event:any){
            
    this.page=event
    this.getProducts(this.page)
}


  deleteProduct(id:string){
    this.products.deleteProduct(id).subscribe((data)=>{
      this.toast.info('Item Deleted Successfully!')
      this.getProducts(this.page);
    })
  }





}
