import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  details = {
    1001: { name: "user1", age: 12, pin: 1001, password: "1234*#%a", balance: 1000 },
    1002: { name: "user2", age: 12, pin: 1002, password: 1235, balance: 1000 },
    1003: { name: "user3", age: 12, pin: 1003, password: 1236, balance: 1000 },
    1004: { name: "user4", age: 12, pin: 1004, password: 1237, balance: 1000 },
    1005: { name: "user5", age: 12, pin: 1005, password: 1238, balance: 1000 },

  }

  constructor() { }
}

//this is to share the data services 
//in cmd, ng g s service/data 
//after creating the service folder under the "app folder"