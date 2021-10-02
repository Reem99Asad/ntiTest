import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
@Input() c:number=0
z=9
  constructor() { console.log('constructor')}

  ngOnInit(): void {console.log('on inii') }

  ngOnChanges(){console.log('on changes')}
  ngDoCheck(){console.log('on check')}
  ngAfterContentInit(){console.log('after content init')}
  ngAfterContentChecked(){console.log('after content checked')}
  ngAfterContentView(){console.log('after view init')}
  ngAfterViewChecked(){console.log('after view checked')}
  ngOnDestroy(){console.log('destroy')}

}
