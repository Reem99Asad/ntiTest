import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
editproductForm=new FormGroup({
name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
category:new FormControl('',Validators.required)
})
get name(){return this.editproductForm.get('name')}
get category(){return this.editproductForm.get('category')}

  constructor(private _global:GlobalService,private _router:Router,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._global.getproduct().subscribe(data=>{
      console.log(data)
      this.editproductForm.patchValue(data)
    })
  }
editproduct(){
  if(this.editproductForm.valid){
    this._global.editproduct(this.editproductForm.value,this._route.snapshot.params.id).subscribe(
      data=>{ },
      ()=>{},
      ()=>{
        this.editproductForm.reset()
        this._router.navigateByUrl('/')
      }
    )
  }
}
}
