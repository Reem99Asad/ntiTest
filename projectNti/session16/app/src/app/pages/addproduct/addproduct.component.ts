import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addproductForm=new FormGroup({
    name:new FormControl(),
    category:new FormControl(),
    price:new FormControl()
  })
get name(){return this.addproductForm.get('name')}
get category(){return this.addproductForm.get('category')}
get price(){return this.addproductForm.get('price')}

  constructor(private _global:GlobalService, private _router:Router) {  }

  ngOnInit() {
  }
addproduct(){
  if(this.addproductForm.valid){
  this._global.addProduct(this.addproductForm.value).subscribe(
    data=>{},
    ()=>{},
   ()=>{this._router.navigateByUrl('/myproducts')}
   ) 
  } 
}
}
