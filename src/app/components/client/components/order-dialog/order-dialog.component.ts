import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent implements OnInit {

  isPayed = false;
  payedText = 'Apmokėti';
  daysAmount: string = null;

  constructor(
    public dialogRef: MatDialogRef<OrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: boolean
  ) { }

  ngOnInit() {
  }

  onAbort() {
    this.dialogRef.close();
  }

  pay() {
    this.isPayed = true;
    this.payedText = 'Apmokėta';
  }

  onDaysAmountSelected(event: MatButtonToggleChange) {
    this.daysAmount = event.value;
  }

}
