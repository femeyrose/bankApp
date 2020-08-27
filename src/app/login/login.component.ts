import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  details = {
    1001: { name: "user1", age: 12, pin: 1001, password: "1234*#%a", balance: 1000 },
    1002: { name: "user2", age: 12, pin: 1002, password: 1235, balance: 1000 },
    1003: { name: "user3", age: 12, pin: 1003, password: 1236, balance: 1000 },
    1004: { name: "user4", age: 12, pin: 1004, password: 1237, balance: 1000 },
    1005: { name: "user5", age: 12, pin: 1005, password: 1238, balance: 1000 },

  }
acno="1234" //this name should be same in name given for the ngModel in the html
pwd="" //whenever the ngModel=acno value changes, this will reflect in these variables
  //any changes in ts/html files will affect the other, that is called two way data binding
  //eg:if acno="1234" given here , in browser this value appear automatically when it runs

constructor() { }

  //the below method is event binding
  acnoChange(event){
    alert("acnoChange change")
    this.acno=event.target.value //this is like taking values using id
 }
 pwdChange(event){
    this.pwd=event.target.value;
  }
  ngOnInit(): void {
  }

//now the below method is template referencing
  login(){
    var acno = parseInt(this.acno)
    //parseInt is to avoid the string input declaration above (in the try catch)
    var pass =this.pwd

    let data = this.details;
    if (acno in data) {
      if (pass == data[acno].password) {
        alert("successfull login")
        window.location.href = "user1.html"
      }
      else {
        alert("incorrect login")
      }
    }
    else {
      //alert("user doesn't exists")
      try {
        if (isNaN(acno)) throw "user doesn't exists"
        if (acno.toString().length < 6) throw "check the length of the acc number"
      }
      catch (err) {
        alert(err)
      }
    }

  }
}
