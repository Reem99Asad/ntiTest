import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  editprofileForm=new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]),
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
  age:new FormControl()
  })
get name(){return this.editprofileForm.get('name')}
get email(){return this.editprofileForm.get('email')}
get age(){return this.editprofileForm.get('age')}

  constructor(private _global:GlobalService,private _router:Router) { }

  ngOnInit(): void {
    this._global.getProfile().subscribe(data=>{
      console.log(data)
      this.editprofileForm.patchValue(data)
    })
  }

  editprofile(){
    this._global.editprofile(this.editprofileForm.value).subscribe(
      data=>{},
      ()=>{},
      ()=>{
        this.editprofileForm.reset()
        this._router.navigateByUrl('/') 
      }
    )
  }

}

