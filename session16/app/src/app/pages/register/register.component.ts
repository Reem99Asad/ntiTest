import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  registerForm=new FormGroup
({
    name:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]),
    email:new FormControl('',[Validators.email,Validators.required]),
    phone:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.minLength(3)]),
    gender:new FormControl(),
    age:new FormControl(),
    position:new FormControl()
  })
get name(){return this.registerForm.get('name')}
get age(){return this.registerForm.get('age')}
get password(){return this.registerForm.get('password')}
get email(){return this.registerForm.get('email')}
get phone(){return this.registerForm.get('phone')}
get gender(){return this.registerForm.get('gender')}
get position(){return this.registerForm.get('position')}

  constructor(private _userService:GlobalService,private _router:Router) { }

  ngOnInit(): void {
  }
  register(){
    if(this.registerForm.valid){
      this._userService.register(this.registerForm.value).subscribe(
        data=>{ },
      ()=>{},
      ()=>{
        this.registerForm.reset()
        this._router.navigateByUrl('/login')
      }
        )
    }
}
}