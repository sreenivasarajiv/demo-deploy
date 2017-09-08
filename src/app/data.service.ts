import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = ['audi','ambassador','pajero'];

  myData(){
    return 'poda dubukoo endhu enoda data :D';
  }

}
