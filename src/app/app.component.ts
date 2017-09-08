import { Component } from '@angular/core';
import { DataService} from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <h1 [ngStyle]="someStyles" [ngClass]="titleClass">{{someVar}}</h1>  
  `,
  styles : [`
  
  .red-title {
    color : red;
  }

  .blue-background {
    background-color : blue;    
  }
  
  `]
})
export class AppComponent {

  someVar:string = '';

  constructor(
    private dataService : DataService
  ){

  }

  ngOnInit(){
    this.someVar = this.dataService.myData();
    console.log(this.dataService.cars);
  }

  titleClass = {
    'red-title ' : false,
    'blue-background' : true
  };

  someStyles = {
    'color' : 'lightgreen',
    'font-size' : '10em'
  };
}
