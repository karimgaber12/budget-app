import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { BudgetItem } from '../shared/models/budget-item-model';

@Component({
  selector: 'app-buget-item-list',
  templateUrl: './buget-item-list.component.html',
  styleUrls: ['./buget-item-list.component.css']
})


export class BugetItemListComponent implements OnInit {

  @Input() budgetItems:BudgetItem[]
  @Output() bDelete : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update:EventEmitter<updateEvent> = new EventEmitter<updateEvent>();

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  delete(item:BudgetItem){

    this.bDelete.emit(item)
    
  }

  onCardClicked(item:BudgetItem){
    let dialogRef = this.dialog.open(EditItemModalComponent, {
      width:"580px",
      data: item
    });
    
    dialogRef.afterClosed().subscribe(result => {
      // if a result have a value
      if (result) {
        this.update.emit({
          old:item,
          new:result
        })
      }

    })
  }

}

export interface updateEvent {
  old:BudgetItem;
  new:BudgetItem;
}
