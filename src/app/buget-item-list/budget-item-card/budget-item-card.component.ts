import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/app/shared/models/budget-item-model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem; // declare property to use it as a condition in htmlFile with true & false
  @Output() deleteButton: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  xButtonDelete(){
    // add event emit
    this.deleteButton.emit();
  }

  onCardClicked(){
    this.cardClick.emit()
  }
}
