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
    {path:"user/editprofile",key:"editprofile",isAuth:true},
    {path:"product/addproduct",key:"add product",isAuth:true},
    {path:"product/allproduct",key:"allproduct",isAuth:true},
    {path:"product/editproduct",key:"editproduct",isAuth:true},
  ]  
  public isloggedIn=localStorage.getItem("AppToken")?true:false
  public navMenu=localStorage.getItem("AppToken")?this.myloggedRoutes:this.myRoutes
  commonUrl=`http://localhost:3000/`
  constructor(private _http:HttpClient) { }
  register(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}user/register`,data)
  }
  login(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}user/login`,data)
  }
  logout():Observable<any>{
    return this._http.post(`${this.commonUrl}user/logout`,null)
  }
  getProfile():Observable<any>{
    return this._http.get(`${this.commonUrl}user/me`)
  }
  editprofile(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}user/me`,data)
  }
  addOrder(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}user/addorder`,data)
  }
  addProduct(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}product/addproduct`,data)
  }
  getproduct():Observable<any>{
    return this._http.get(`${this.commonUrl}product/me`)
  }
  editproduct(data:any,id:any):Observable<any>{
    return this._http.patch(`${this.commonUrl}product/${id}`,data)
  }
  singleProduct(id:any):Observable<any>{
    return this._http.get(`${this.commonUrl}product/${id}`)
  }
  myproducts():Observable<any>{
    return this._http.get(`${this.commonUrl}product/myproducts`)
  }
  deleteProduct(id:any):Observable<any>{
    return this._http.delete(`${this.commonUrl}product/${id}`)
  }
  addProductimage(file:any):Observable<any>{
    const formData=new FormData()
    formData.append('img',file,file.name)
    return this._http.post(`${this.commonUrl}uploadImg`,formData)
  }
}
