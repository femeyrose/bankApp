import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { createDirective } from '@angular/compiler/src/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions=[];
  id="";
  constructor(private dataService:DataService) { 
    this.getTransactions(); //API calling
  }

    getTransactions(){ //this getTransactions() is an API
      //we get the list of transactions when this is called

    //this.transactions=dataService.getTransactions();
    //console.log(this.transactions);
  this.dataService.getTransactions()
.subscribe((data:any)=>{
  this.transactions=data.transactions;
})

}
ngOnInit(): void {
}

// onDelete($event){
//   alert("Alert from parent :"+$event)
//    this.dataService.deleteTransaction($event)
//    // what is emitted from child (this.onDelete.emit(this.id) in delete()) is taken in $event 
//   .subscribe((data:any)=>{
//     alert(data.message)
//     this.getTransactions();
    
//   })
// }

deleteTransaction($event){
  //here we can pass $event or anything else, but in html $event should be passed
  this.dataService.deleteTransaction($event)
  .subscribe((data:any)=>{
        alert(data.message);
        this.id="";
        this.getTransactions();
        
      })

}

onCancel($event){
  this.id="";
}

delete(id){
  this.id=id;
}

showConfirmationDialog(id){
  this.id=id;
}

}
//transactions working flow

//transactions array is created in the details
//in deposit and withdraw we push these details to the array
//giving these push before saveDetails and return true
//so before every transactions these are pushed
//the getTransactions() defined in the dataServices will return the value
//in the tranactions.ts , we declare these in the constructor
// so this tranactions.ts will be called when the page is loaded
//the values getting in the 'dataService.getTransactions()' array will be replaced by 'this.transactions (ie,transactions=[])'
//which is declared first
//note, no need of giving as transactions=[] bcz in the (can declared as transactions;  ) 
//this.transactions=dataService.getTransactions(); step this will automatically treat as array

//main.ts is the entry level of angular








