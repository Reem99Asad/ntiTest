import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public myRoutes=[
    {path:"",key:"home"},
    {path:"user/register",key:"Register",isAuth:false},
    {path:"user/login",key:"login",isAuth:false}]
  public myloggedRoutes=[
    {path:"",key:"home"},
    {path:"user/addAddress",key:"add address",isAuth:true},
    {path:"user/profile",key:"profile",isAuth:true},
    {path:"product/addproduct",key:"add product",isAuth:true},
    {path:"product/allproduct",key:"allproduct",isAuth:true},
    {path:"product/editproduct",key:"editproduct",isAuth:true},
  ]  
  public isloggedIn=localStorage.getItem("AppToken")?true:false
  public navMenu=localStorage.getItem("AppToken")?this.myloggedRoutes:this.myRoutes
  commonUrl="http://localhost:3000/"
  constructor(private _http:HttpClient) { }
  register(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}customer/register`,data)
  }
  login(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}customer/login`,data)
  }
  logout(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}customer/logout`,null)
  }
  me():Observable<any>{
    return this._http.post(`${this.commonUrl}customer/me`,null)
  }
  addOrder(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}customer/addorder`,data)
  }
  addProduct(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}product/addproduct`,data)
  }
  editproduct(data:any,id:any):Observable<any>{
    return this._http.patch(`${this.commonUrl}product/${id}`,data)
  }
  myproducts():Observable<any>{
    return this._http.get(`${this.commonUrl}product/myproducts`)
  }
}
