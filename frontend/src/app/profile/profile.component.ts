import { Component } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private authService:AuthserviceService){}
    
   user:any;
   admin:boolean=false;


   ngOnInit(){
      
     let userData=this.authService.loggedInUser();
     if(userData.role==='admin'){
        this.admin=true;
     }
     else{
      this.admin=false;
     }

     this.user=userData;
   }

}
