import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/shared/services/data-base.service';

interface StorageItem {
  name: string;
  description: string;
  amount: number;
  place: string;
}

interface DeliveredItem {
  name: string;
  description: string;
  firstStop: string;
  adress: string;
}


@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  storageItems: StorageItem[];

  deliveredItems: DeliveredItem[];

  displayedColumns1 = ['name', 'description', 'amount', 'place'];

  constructor(
    private dataBase: DataBaseService
  ) { }

  ngOnInit() {
    this.storageItems = this.dataBase.getStorageItems();
    this.deliveredItems = this.dataBase.getDeliveredItems();
  }

}
