import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() item:any;

  constructor(private authService:AuthserviceService, private toast:ToastrService, private router:Router){}


  logout(){
    this.authService.logout().subscribe((result)=>{
       this.toast.success(result.message);
       localStorage.removeItem('user');
       this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    })
  }

}
