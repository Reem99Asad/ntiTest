import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
myProducts:any={}
  constructor(private _route:ActivatedRoute,private _global:GlobalService) { }

  ngOnInit(): void {
    this.getMyProducts()
  }
getMyProducts(){
  this._global.singleProduct(this._route.snapshot.params.id).subscribe(
    data=>{this.myProducts=data}
  )
}
}
