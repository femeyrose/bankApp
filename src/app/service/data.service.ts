import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  details = {
    1001: { name: "user1", acno: 1001, pin: 1001, password: 1234, balance: 1000 },
    1002: { name: "user2", acno: 1002, pin: 1002, password: 1235, balance: 1000 },
    1003: { name: "user3", acno: 1003, pin: 1003, password: 1236, balance: 1000 },
    1004: { name: "user4", acno: 1004, pin: 1004, password: 1237, balance: 1000 },
    1005: { name: "user5", acno: 1005, pin: 1005, password: 1238, balance: 1000 },

  }

  constructor() { }
  currentUser;

  register(name, acno, pin, pwd) {
    if (acno in this.details) {
      alert("acc num already exists. Please login")
      return false; //return false when register fn is called from the register.ts

    }
    //here return false will stop the execution of the remaining part



    this.details[acno] = {
      name,
      acno,
      pin,
      password: pwd,
      balance: 0
    }
    console.log("after", this.details)
    return true;
  }


//this is to share the data services 
//in cmd, ng g s service/data 
//after creating the service folder under the "app folder"

login(acno1, password){
var acno=parseInt(acno1);
var data=this.details;
   
  if (acno in data) {
    var pwd=data[acno].password
    if (pwd==password){
      this.currentUser=data[acno];
      return true;
    }

}
}
}
