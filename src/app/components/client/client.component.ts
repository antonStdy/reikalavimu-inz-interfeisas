import { Component, OnInit } from '@angular/core';
import { StorageItem } from 'src/app/shared/models/interfaces.model';
import { DataBaseService } from 'src/app/shared/services/data-base.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from './components/order-dialog/order-dialog.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  existingItems: StorageItem[];
  orderedItems: StorageItem[];
  displayedColumns1 = ['name', 'description', 'amount', 'place'];
  displayedColumns2 = ['name', 'description', 'place'];
  atsiliepimas = '';



  constructor(
    private dataBase: DataBaseService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.existingItems = this.dataBase.getStorageItems();
    this.orderedItems = this.dataBase.getOrderedItems();
  }

  openOrderDialog(itemToOrder: StorageItem) {
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '300px',
      data: false
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.dataBase.updateOrderedItems(itemToOrder);
        this.orderedItems.push(itemToOrder);
        this.orderedItems = this.orderedItems.slice();
      }

    });
  }

  cancelOrder(item: StorageItem) {
    const index = this.orderedItems.indexOf(item);
    this.orderedItems.splice(index, 1);
    this.dataBase.saveOrderedItems(this.orderedItems);
    this.orderedItems = this.orderedItems.slice();
  }

  sendAtsiliepimas() {
    this.atsiliepimas = '';
  }

}
