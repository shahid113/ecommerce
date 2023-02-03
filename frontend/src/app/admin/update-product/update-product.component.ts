import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
       
  product:any;
    
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute, private toast:ToastrService, 
    private router:Router){}

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

  updateProduct(data:any){

    data.id=this.product.product._id;

    this.productService.updateProduct(data).subscribe((result)=>{
       this.toast.success('Product Updated Successfully!')
       this.router.navigate(['/admin/products'])
    })

  }
}
