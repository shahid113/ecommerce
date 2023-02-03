import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users:any;

  constructor(private userService:UserService){}

  ngOnInit(){
    this.userService.getAllUser().subscribe((result)=>{
      this.users=result.users;
    })
  }

}
