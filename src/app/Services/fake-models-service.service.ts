import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeModelsServiceService {

  constructor() { }
  getUsers(){
    let list =[];
    for  (let index =0; index <100;index++) {
      list.push({producto:"coca",marca:"bhsgd"});
      
      
    }
    return list;
  }
}

