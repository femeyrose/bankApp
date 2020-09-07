import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name="1234"
  acno=""
  pin=""
  pwd=""
 
registerForm=this.fb.group({
name:[''],
acno:[''],
pwd:[''],
pin:['']    
});

//all these are taken as string default value


  constructor(private dataService:DataService,
    private router:Router,
    private fb:FormBuilder) { }

  ngOnInit(): void {}
 
register(){
console.log(this.registerForm.value)
//this is to get the values that we entered, can been seen in the browser's console



    // const result = this.dataService.register(this.name,this.acno,this.pin,this.pwd);
    //   if(result){
    //     alert("successfully created account.Please login")
    //     this.router.navigateByUrl("");
    //   }

    //the above willn't works for the reactive Form

    


   

  }

}

