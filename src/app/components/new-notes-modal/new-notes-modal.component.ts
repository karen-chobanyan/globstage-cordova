import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-new-notes-modal',
  templateUrl: './new-notes-modal.component.html',
  styleUrls: ['./new-notes-modal.component.scss']
})
export class NewNotesModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewNotesModalComponent>) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
