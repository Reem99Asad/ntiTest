import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './component/c1/c1.component';
import { C2Component } from './component/c2/c2.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserInterceptor } from './providers/user.interceptor';
import { AddorderComponent } from './pages/addorder/addorder.component';
import { MeComponent } from './pages/me/me.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AddorderComponent,
    MeComponent,
    AddproductComponent,
    ReactiveComponent,
    FooterComponent,
    NavbarComponent,
    EditProductComponent,
    AllProductsComponent,
    SingleProductComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ { provide:HTTP_INTERCEPTORS, useClass:UserInterceptor,multi:true } ],
  bootstrap: [AppComponent]

})
export class AppModule { }
