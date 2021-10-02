import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message=""
  loginForm=new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.email,Validators.required]),
  })
  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}

  constructor(public _global:GlobalService,private _router:Router) { }

  ngOnInit(): void {
  }
  login(){
    
    this._global.login(this.loginForm.value).subscribe(
      data=>{localStorage.setItem('AppToken',data.data.token)},
      (e)=>{this.message="unauthorized"},
      ()=>{
        this._global.navMenu=this._global.myloggedRoutes
        this._router.navigateByUrl('/profile')
      }
    )
  }
  

}
