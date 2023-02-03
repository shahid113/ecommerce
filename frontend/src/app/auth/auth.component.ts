import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

    
     showLogin: boolean = true;
     authError: string = ""
     err:any;
     
     constructor(private authService:AuthserviceService, private router:Router){}

     register(data:any){
        this.authService.register(data);
      }


      login(data:any) {
        this.authService.login(data);    
      }
    
      openLogin() {
        this.showLogin = true;
      }
    
      openSignUp() {
        this.showLogin = false;
      }



}
