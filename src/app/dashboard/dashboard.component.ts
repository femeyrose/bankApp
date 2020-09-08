import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // details = {
  //   1001: { name: "user1", age: 12, pin: 1001, password: "1234*#%a", balance: 1000 },
  //   1002: { name: "user2", age: 12, pin: 1002, password: 1235, balance: 1000 },
  //   1003: { name: "user3", age: 12, pin: 1003, password: 1236, balance: 1000 },
  //   1004: { name: "user4", age: 12, pin: 1004, password: 1237, balance: 1000 },
  //   1005: { name: "user5", age: 12, pin: 1005, password: 1238, balance: 1000 },

  // }
  acno = ""
  pin = ""
  amt = ""



  constructor(public dataService:DataService) { }

  acnoChange(event) {
    this.acno = event.target.value;
  }
  pinChange(event) {
    this.pin = event.target.value;
  }
  amtChange(event) {
    this.amt = event.target.value;
  }

  ngOnInit(): void { }


  deposit() {
    var pinnum = this.pin
    var amt2 = Number(this.amt)
    var acno2 = this.acno
    let data = this.dataService.details;

    if (acno2 in data) {
      var pin1 = data[acno2].pin
      if (pinnum == pin1) {
        data[acno2].balance += amt2
        alert("credicted")
        alert(data[acno2].balance)

      }
    }
  }

}

