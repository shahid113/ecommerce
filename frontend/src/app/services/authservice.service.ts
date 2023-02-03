import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  // isUserLoggedIn=new EventEmitter<boolean>(false);

  ngOnInit(){

  }

  constructor(private http:HttpClient, private router:Router, private toastr:ToastrService) { }


  register(data:any){
        
    this.http.post<any>('http://localhost:3000/api/register', data, {observe:"response"}).subscribe((result)=>{
      if(result && result.body){
        localStorage.setItem('user', JSON.stringify(result.body))
        this.toastr.success('Register Successful')
        this.router.navigate(['/'])
      }
    })
    

  }

  login(data:any){

    this.http.post<any>('http://localhost:3000/api/login', data, {observe:"response"}).subscribe((result)=>{
      if(result){
        localStorage.setItem('user', JSON.stringify(result.body))
        this.toastr.success('Login Successful')
        this.router.navigate(['/'])
      }
    })

  }

  logout(){
    return this.http.delete<any>('http://localhost:3000/api/logout')
  }

  loggedInUser(){
     let userData=localStorage.getItem('user');
     let parseData=userData && JSON.parse(userData);
     return parseData.user
  }



}
