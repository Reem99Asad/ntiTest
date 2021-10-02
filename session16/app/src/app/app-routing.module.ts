import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { IsnotLoggedGuard } from './guards/isnot-logged.guard';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { Err404Component } from './pages/err404/err404.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { AddorderComponent } from './pages/addorder/addorder.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
const routes: Routes = [
 {path:"",component:HomeComponent},
 {path:"register",component:RegisterComponent,canActivate:[IsLoggedGuard]},
 {path:"login",component:LoginComponent,canActivate:[IsLoggedGuard]},
 {path:"addorder",component:AddorderComponent,canActivate:[IsLoggedGuard]},
 {path:"editprofile",component:ProfileComponent,canActivate:[IsLoggedGuard]},
   {path:"addproduct",component:AddproductComponent,canActivate:[IsnotLoggedGuard]},
   {path:"editProduct", component:EditProductComponent, canActivate:[IsnotLoggedGuard]},
   {path:"editProduct/:id", component:SingleProductComponent, canActivate:[IsnotLoggedGuard]},
   {path:"myproducts",component:AllProductsComponent,canActivate:[IsnotLoggedGuard]},
   {path:"myproducts/:id",component:SingleProductComponent,canActivate:[IsnotLoggedGuard]},
   {path:"**",component:Err404Component}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
