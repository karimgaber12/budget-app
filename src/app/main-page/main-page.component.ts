import { Component, Input, OnInit } from '@angular/core';
import { updateEvent } from '../buget-item-list/buget-item-list.component';
import { BudgetItem } from '../shared/models/budget-item-model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent implements OnInit {


 @Input() budgetItems:BudgetItem[] = new Array<BudgetItem>();

 totalBudget: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem:BudgetItem){
    this.budgetItems.push(newItem)
    this.totalBudget += newItem.amount
  }
  deleteItem(item:BudgetItem){
    let index = this.budgetItems.indexOf(item)
    this.budgetItems.splice(index,1)
    this.totalBudget -= item.amount
  }

  updateItem(updateEvent:updateEvent){
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
    this.totalBudget += updateEvent.new.amount
    this.totalBudget -= updateEvent.old.amount

  }
}
