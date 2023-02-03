import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    product={
        name:'',
        category:'',
        price:'',
        description:'',
        stock:'',

    }
      
    selectedFile:any;

    constructor(private productService:ProductService, private toast:ToastrService){}
    
    
    onChange(event:any){
      this.selectedFile=event.target.files[0]
    }

    createProduct(){


      
       let formData=new FormData();
       formData.append('name', this.product.name);
       formData.append('category', this.product.category );
       formData.append('description', this.product.description)
       formData.append('price', this.product.price);
       formData.append('stock', this.product.stock);
       formData.append('image', this.selectedFile);
     
          this.productService.createProduct(formData)
          .subscribe((result)=>{
            this.toast.success(result.message);
          })

        
    }
  

}
