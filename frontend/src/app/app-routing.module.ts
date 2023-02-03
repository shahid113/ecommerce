import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductDetailsComponent } from './shared/product-details/product-details.component';
import { MyordersComponent } from './myorders/myorders.component';
import { ErrorComponent } from './error/error.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'auth', component:AuthComponent },
    {path:'profile',component:ProfileComponent},
    {path:'admin', loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule), canActivate:[AuthenticationGuard]},
    {path:'product/:id', component:ProductDetailsComponent},
    {path:'cart', component:CartComponent},
    {path:'checkout', component:CheckoutComponent},
    {path:'myorders', component:MyordersComponent},
    {path:'search/:key', component:SearchComponent},
    {path:'**', component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
