import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name=""
  acno=""
  pin=""
  pwd=""
 

  constructor(private dataService:DataService) { }

  ngOnInit(): void {}
 
  register(){
    const result = this.dataService.register(this.name,this.acno,this.pin,this.pwd);
      if(result){
        alert("successfully created account.Please login")
      }

    


   

  }

}

