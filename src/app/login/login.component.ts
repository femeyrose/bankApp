import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //router should be import from the angular core to redirect to the page
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  


  acno = "" //this name should be same in name given for the ngModel in the html
  pwd = "" //whenever the ngModel=acno value changes, this will reflect in these variables
  //any changes in ts/html files will affect the other, that is called two way data binding
  //eg:if acno="1234" given here , in browser this value appear automatically when it runs

  loginForm = this.fb.group({
    acno: ['', [Validators.required]],
    pwd: ['', [Validators.required]],

  });

  //dependancy injection: 
  constructor(private router: Router,
    private dataService: DataService,
    private fb: FormBuilder) { } //first name is name the name we given , second router is imported
  //now the details object can be moved to data service
  //after adding the DataService here and importing it

  //the below method is event binding
  acnoChange(event) {
    alert("acnoChange change")
    this.acno = event.target.value //this is like taking values using id
  }
  pwdChange(event) {
    this.pwd = event.target.value;
  }
  ngOnInit(): void {
  }


  getError(field) {
    return (this.loginForm.get(field).touched || this.loginForm.get(field).dirty) && this.loginForm.get(field).errors;
  }
  //now the below method is template referencing
  login() {
    if (this.loginForm.valid) {
      const result = this.dataService.login(this.loginForm.value.acno, this.loginForm.value.pwd);
      //first the login fn will be called while entering the acno,pwd values
      //the above login() is called
      //the login() in the data.services.ts is called when the const result step is reached
      //atfer seeing the return true statement in the data.service.ts , it will return the control to 
      //the next line below (if (result))
      
      if (result) {
        alert("login succesfull");
        this.router.navigateByUrl("dashboard")
      }
      else{
        alert("invalid credentials")
      }
    }
    else
    {
      alert("form is invalid")
    }
        // var acno = parseInt(this.loginForm.value.acno)
        // //parseInt is to avoid the string input declaration above (in the try catch)
        // var pass = this.loginForm.value.pwd

        // let data = this.dataService.details;
        // if (acno in data) {
        //   if (pass == data[acno].password) {
        //     alert("successfull login")
        //     // window.location.href = "user1.html"
        //     //to navigate to the page
        //     this.router.navigateByUrl("dashboard")
        //   }
        //   else {
        //     alert("incorrect login")
        //   }
        // }
        // else {
        //   //alert("user doesn't exists")
        //   try {
        //     if (isNaN(acno)) throw "user doesn't exists"
        //     if (acno.toString().length < 6) throw "check the length of the acc number"
        //   }
        //   catch (err) {
        //     alert(err)
        //   }
        // }

  // 

  }
}
