import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { AddorderComponent } from './pages/addorder/addorder.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
const routes: Routes = [
 {path:"",component:HomeComponent},
 {path:"user",children:[
 {path:"register",component:RegisterComponent},
 {path:"login",component:LoginComponent},
 {path:"addorder",component:AddorderComponent},
 {path:"profile",component:ProfileComponent}
 ]},
 {path:"product",children:[
   {path:"addproduct",component:AddproductComponent},
   {path:"editproduct",component:EditProductComponent},
   {path:"allproduct",component:AllProductsComponent}
 ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
