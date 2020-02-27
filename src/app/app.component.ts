import { Component, OnInit } from '@angular/core';
import { DataBaseService } from './shared/services/data-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    public dataBaseService: DataBaseService
  ){}

  ngOnInit() {
    this.dataBaseService.initDeliveredItems();
    this.dataBaseService.initStorageItems();
  }

}
