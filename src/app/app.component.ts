import { Component, NgZone, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit,OnChanges  {
  name = 'Angular';
  myNumber:number = 10;

  constructor(){
    console.info('AppComponent - constructor')
  }

  ngOnInit(){
   console.info('AppComponent - ngOnInit')
  }

  ngOnChanges(changes:SimpleChanges){
    console.info('AppComponent - ngOnChanges - :'+JSON.stringify(changes))
  }

  ngDoCheck(){
    console.info('AppComponent - ngDoCheck')
  }

  ngAfterContentInit(){
     console.info('AppComponent - ngAfterContentInit')
  }

  ngAfterContentChecked(){
    console.info('AppComponent - ngAfterContentChecked')
  }

  ngAfterViewInit(){
    console.info('AppComponent - ngAfterViewInit')
  }

  ngAfterViewChecked(){
    console.info('AppComponent - ngAfterViewChecked')
  }

  ngOnDestroy(){
    console.info('AppComponent - ngOnDestroy')
  }
}
