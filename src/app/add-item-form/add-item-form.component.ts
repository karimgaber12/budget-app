import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';  //Adding form
import { BudgetItem } from '../shared/models/budget-item-model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {
 // declare and import model that in(shared/model)
  @Input() item:BudgetItem = new BudgetItem('',null!); // defult value
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>(); // to push data from children to parent

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){   //Adding form
    this.formSubmit.emit(form.value)
    form.reset()
  }
}
