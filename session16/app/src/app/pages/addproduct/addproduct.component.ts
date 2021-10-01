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
    name:new FormControl("cupcake"),
    productType:new FormControl("cupcake,biscuit,dunats"),
    price:new FormControl("40")
  })

  constructor(private _global:GlobalService, private _router:Router) {  }

  ngOnInit() {
  }
addproduct(){
  this._global.addProduct(this.addproductForm.value).subscribe(
    data=>this.addproductForm=data)
   this._router.navigate(['/product/addproduct']) 
      
      
 
}
}
