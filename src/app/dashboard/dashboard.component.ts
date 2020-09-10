import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';

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

  depositForm = this.fb.group({
    acno: ['', [Validators.required]],
    pin: ['', [Validators.required]],
    amt: ['', [Validators.required]]

  });

  withdrawForm = this.fb.group({
    acno: ['', [Validators.required]],
    pin: ['', [Validators.required]],
    amt: ['', [Validators.required]]

  });


  constructor(public dataService: DataService,
    private fb: FormBuilder) { }

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

  //for deposit

  getError(field) {
    return (this.depositForm.get(field).touched || this.depositForm.get(field).dirty) && this.depositForm.get(field).errors;
  }

  deposit() {

    if (this.depositForm.valid) {
      const result = this.dataService.deposit(this.depositForm.value.acno, this.depositForm.value.pin, this.depositForm.value.amt);
      if (result.status==true) {
        //alert("credicted and your balance is" +this.dataService.currentUser.balance) 
        alert(result.message);
        alert(result.balance);
      }
      else {
        alert(result.message)
      }
    }
    else
    {
      alert("form is invalid")
    }

  }

  //for withdraw

  getError1(field) {
    return (this.withdrawForm.get(field).touched || this.withdrawForm.get(field).dirty) && this.withdrawForm.get(field).errors;
  }

  withdraw() {

    if (this.withdrawForm.valid) {
      const result = this.dataService.withdraw(this.withdrawForm.value.acno, this.withdrawForm.value.pin, this.withdrawForm.value.amt);
      if (result.status==true) {
        alert(result.message)  ;
        alert(result.balance)
      }
      
      else{
        alert(result.message)
      }
    }
    else
    {
      alert("form is invalid")
    }

  }


}