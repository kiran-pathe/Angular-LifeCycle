import { Component, SimpleChanges, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls : ['./test.component.css']
})
export class TestComponent {
  name = 'test works'
  @Input() data:number;

  constructor(){
    console.info('TestComponent - constructor : data = '+this.data)
  }

  ngOnInit(){
   console.info('TestComponent - ngOnInit : data = '+this.data)
  }

  ngOnChanges(changes:SimpleChanges){
    console.info('TestComponent - ngOnChanges - :'+JSON.stringify(changes))
  }

  ngDoCheck(){
    console.info('TestComponent - ngDoCheck')
  }

  ngAfterContentInit(){
     console.info('TestComponent - ngAfterContentInit')
  }

  ngAfterContentChecked(){
    console.info('TestComponent - ngAfterContentChecked')
  }

  ngAfterViewInit(){
    console.info('TestComponent - ngAfterViewInit')
  }

  ngAfterViewChecked(){
    console.info('TestComponent - ngAfterViewChecked')
  }

  ngOnDestroy(){
    console.info('TestComponent - ngOnDestroy')
  }
}