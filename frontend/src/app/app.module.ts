import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { ErrorInterceptor } from './error.interceptor';
import {CookieService} from 'ngx-cookie-service'
import { RequestInterceptor } from './request.interceptor';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { ProductDetailsComponent } from './shared/product-details/product-details.component';
import { CarousalComponent } from './shared/carousal/carousal.component';
import { FooterComponent } from './footer/footer.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AccessGuard } from './guards/access.guard';
import { MyordersComponent } from './myorders/myorders.component';
import { ErrorComponent } from './error/error.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    CarousalComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    MyordersComponent,
    ErrorComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
}),
    NgxPaginationModule,
    NgxUiLoaderModule
  ],
  providers: [

    {
       provide:HTTP_INTERCEPTORS,
       useClass:ErrorInterceptor,
       multi:true
    },

    
    {
      provide:HTTP_INTERCEPTORS,
      useClass:RequestInterceptor,
      multi:true
   },



    CookieService,
    AuthenticationGuard,
    AccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
