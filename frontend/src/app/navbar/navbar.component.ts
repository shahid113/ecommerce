import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, count } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
      
    
    menuType:string='default';
    userName:string='';

    countCart:number=0;

    constructor(private router:Router, 
      private authService:AuthserviceService, 
      private toast:ToastrService, 
      private cartService:CartService,
      private productService:ProductService){}


    ngOnInit():void{

      this.router.events.subscribe((val:any)=>{

          if(localStorage.getItem('user') && val.url){
            let user=this.authService.loggedInUser();
            let role=user.role;
            this.userName=user.name;
  
            if(role==='admin' && val.url.includes('admin')){
              this.menuType='admin';
            }
            else if(user){
              this.menuType='userIn'
            }
            else{
              this.menuType='default';
            }
          }

               
      })

      this.cartService.getProducts()
      .subscribe((result)=>{

         this.countCart=result.length;
            
       })


    }


    logout(){
          this.authService.logout().subscribe((result)=>{
             this.toast.success(result.message);
             localStorage.removeItem('user');
             this.router.navigate(['/']);
             this.menuType='default';
          })
    }


    search(data:any){
       this.router.navigate([`/search/${data.key}`])
       this.productService.searchProduct(data.key)
    }





}
