import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
myProducts:any[]=[]
  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
    this.getMyProducts()
  }

getMyProducts(){
  this._global.myproducts().subscribe(
    data=>{this.myProducts=data})
}
delProduct(id:any,i:any){
  this._global.deleteProduct(id).subscribe(
    data=>{},
    ()=>{},
    ()=>{
      this.myProducts.splice(i,1)
    }
  )
}
}
