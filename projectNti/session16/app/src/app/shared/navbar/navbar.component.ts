import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _global:GlobalService,private _router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this._global.logout().subscribe(
      data=>{},
      ()=>{},
      ()=>{
this._global.isloggedIn=false
localStorage.removeItem('AppToken')
this._router.navigateByUrl('/')
      }
    )
  }

}
