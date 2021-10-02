import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
file:any
  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
  }
  onChangeFile(event:any){
    console.log(event.target.files)
    this.file=event.target.files[0]
  }
uploadimg(){
  this._global.addProductimage(this.file).subscribe(
    data=>{console.log(data)}
  )
}
}
