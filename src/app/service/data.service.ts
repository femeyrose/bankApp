import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

const options={
  withCredentials:true
}
//to set cookies/authentication
//to send and save cookies
//we have set this options except login and register
//otherwise message "please login" will appear



@Injectable({
  providedIn: 'root'
})
export class DataService {
  details = {
    1001: { name: "user1", acno: 1001, pin: 1001, password: 1234, balance: 1000, transactions: [] },
    1002: { name: "user2", acno: 1002, pin: 1002, password: 1235, balance: 1000, transactions: [] },
    1003: { name: "user3", acno: 1003, pin: 1003, password: 1236, balance: 1000, transactions: [] },
    1004: { name: "user4", acno: 1004, pin: 1004, password: 1237, balance: 1000, transactions: [] },
    1005: { name: "user5", acno: 1005, pin: 1005, password: 1238, balance: 1000, transactions: [] },

  }

  //we have added the transactions array to push the details after each transactions
  //like {amount:100, type:Credicted}

  constructor(private http :HttpClient )
   { this.getDetails() }

  //for the first loading, the details above will be taken, after 
  //each execution and saveDetails(), these will be taken in the getDetails() when the page is loaded
  //bcz it is defined in the constructor

  currentUser;

  saveDetails() {
    localStorage.setItem("details", JSON.stringify(this.details));

    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    }
  }
getTransactions(){
 // return this.details[this.currentUser.acno].transactions
  return this.http.get("http://localhost:3000/transactions",options)

}
deleteTransaction(id)
{
  return this.http.delete("http://localhost:3000/transactions/"+id,options)

}

  getDetails() {
    if (localStorage.getItem("details")) {
      this.details = JSON.parse(localStorage.getItem("details"));
    }

    //for the first getTransactions() {
   //first  time the above will be commented, to have the
    //first transactions

    if (localStorage.getItem("currentUser")) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
  }

  //we can store items in local Storage,it stores (key,value)
  //we have to store the acc details, here text/string is stored
  //to store the all objects full we use JSON.stringify and all these are stored in each fn
  //same key is used to get the items , we use getDetails()
  //ie, every change we call saveDetails(), whenever these are done we call getDetails() which is defined in the constructor, all the saved details are taken using getDetails()
  //localStorage is the memeory given by the browser in the 5th memory, it has no expiry 
  //saveDetails will store each new entry (value) in the 'details' key

  register(name, acno, pin, pwd) {
    // if (acno in this.details) {
    //   alert("acc num already exists. Please login")
    //   return false; //return false when register fn is called from the register.ts

    // }
    //here return false will stop the execution of the remaining part


const data={
  name,
  acno,
  pin,
  password: pwd,
  balance: 0,
  transactions: []
}

return this.http.post("http://localhost:3000/register",data)

    // this.details[acno] = {
    //   name,
    //   acno,
    //   pin,
    //   password: pwd,
    //   balance: 0,
    //   transactions: []
    // }
    // console.log("after", this.details)
    // this.saveDetails();
    // return true;
  }
  


  //this is to share the data services 
  //in cmd, ng g s service/data 
  //after creating the service folder under the "app folder"

  login(acno1, password) {
    var acno = parseInt(acno1);
    //var data = this.details;
const data ={acno,password}

return this.http.post("http://localhost:3000/login",data,options)
    // if (acno in data) {
    //   var pwd = data[acno].password
    //   if (pwd == password) {

    //     this.currentUser = data[acno];
    //     this.saveDetails();
    //     return true;
    //   }

    // }
  }


  deposit(acno2, pin2, amt2) {
    var pin = parseInt(pin2)
    var amt = Number(amt2)

    var acno = acno2
    const data={acno,pin,amt};
    // note: the parameters given in const data should be same that given in the postman


    return this.http.post("http://localhost:3000/deposit",data,options)

    //let data = this.details;

    // if (acno in data) {
    //   var pin1 = data[acno].pin

    //   if (pin == pin1) {
    //     data[acno].balance += amt

    //     data[acno].transactions.push({
    //       amount: amt,
    //       type: 'Credicted'
    //     })
        //the transactions push should be given before save and return 
        // to take the values to its array before it is done


        //  this.currentUser=data[acno]
        //  return true; 
    //     this.saveDetails();

    //     return {
    //       status: true,
    //       message: 'account has been credicted',
    //       balance: data[acno].balance
    //     }

    //   }
    //   else {
    //     return {
    //       message: 'invalid account'
    //     }
    //   }
    // }
  }

  withdraw(acno2, pin2, amt2) {
    var pin = parseInt(pin2)
    var amt = Number(amt2)

    var acno = acno2
   
    const data={acno,pin,amt};
    return this.http.post("http://localhost:3000/withdraw",data,options)
  }

}






  //   let data = this.details;

  //   if (acno in data) {
  //     var pin1 = data[acno].pin
  //     if (data[acno].balance < amt) {
  //       return {
  //         status: false,
  //         message: 'insufficient balance',
  //         balance: data[acno].balance
  //       }
  //     }

  //     else if (pin == pin1) {

  //       data[acno].balance -= amt
  //       this.currentUser = data[acno]

  //       data[acno].transactions.push({
  //         amount: amt,
  //         type: 'Debited'
  //       })

  //       this.saveDetails();
  //       return {
  //         status: true,
  //         message: 'account has been debicted',
  //         balance: data[acno].balance
  //       }

  //     }
  //     else {
  //       return {
  //         message: 'invalid account'
  //       }
  //     }

  //   }
 



//git hub clone (bankApp) of sibin sir
//http://github.com/sibin387/bankingapp-angular.git
