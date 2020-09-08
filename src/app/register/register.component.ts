import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name = ""
  acno = ""
  pin = ""
  pwd = ""

  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    acno: ['', [Validators.required, Validators.minLength(3)]],
    pwd: ['', [Validators.required]],
    pin: ['', [Validators.required]]
  });

  //name,acno etc should be same as that given in the formControlName in html


  //validators can been taken from angular
  //validators.required only check whether any empty fields exists

  //all these are taken as string default value


  constructor(private dataService: DataService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void { }

  getError(field){
    //return this.registerForm.get(field).errors
    return(this.registerForm.get(field).touched||this.registerForm.get(field).dirty)&& this.registerForm.get(field).errors;
  //this is to appear form without any invalid highlights under each fields before entering any data
  //the error appears only if touch and skip the field
  
  }

  //for giving the validation checking in multiple times  like below if condition
  // we use this get Error, which takes pin,pwd, accno, name for validation check
  // in the getError(field), field takes the values (pin,name,pwd,acno) that we given in the getError('acno') in the html

  register() {
    //console.log(this.registerForm.value)
    //this is to get the values that we entered, can been seen in the browser's console

// if(this.registerForm.get('name').errors)
// {
//   alert("Name is invalid")
// }

//giving condition for the validation check of 'Name' field
//this condition is for the name field only
//for having all the fields check use getError(name) commonly



    if (this.registerForm.valid) {
      const result = this.dataService.register(this.registerForm.value.name, this.registerForm.value.acno, this.registerForm.value.pin, this.registerForm.value.pwd);
      if (result) 
      {
        alert("successfully created account.Please login")
        this.router.navigateByUrl("");
      }
    }
    else 
    {
      alert("form is invalid");
    }
    //to check the validation in the browser 
    //the above willn't works for the reactive Form until we add 'this.registerForm.value.name etc

  }

}

