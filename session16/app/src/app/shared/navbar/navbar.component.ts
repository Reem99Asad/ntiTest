import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
myRoutes=[
  {path:"",key:"home"},
  {path:"user/register",key:"Register",isAuth:false},
  {path:"user/login",key:"login",isAuth:false}]
  myloggedRoutes=[
    {path:"",key:"home"},
    {path:"user/addproduct",key:"addproduct",isAuth:true},
  {path:"user/profile",key:"profile",isAuth:true},
  {path:"product/editproduct",key:"editproduct",isAuth:true},
  {path:"product/Allproduct",key:"Allproduct",isAuth:true}
  ]
  constructor(public _global:GlobalService) { }

  ngOnInit(): void {
  }

}
