import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {
@Input() id: string; //used to communicate from parent to child
@Output() onDelete = new EventEmitter(); //used to communicate from child to parent
//multiple events can be emitted using EventEmitter()

@Output() onCancel = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    this.onDelete.emit(this.id) //onDelete this event is deleted, we have to subscribe the event in the parent (transaction.ts) 
    //and mention this in transaction.html also

    //multiple objects can be passes here using objects like
    // this.onDelete.emit(this.id){
    //   id:1,
    //   name:"test",
    // }

    //also multiple emission is possible

    //alert("delete?")
  }
  cancel(){
    this.onCancel.emit(this.id)
    
  }
}
