import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewNotesModalComponent } from '../../components/new-notes-modal/new-notes-modal.component';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  entryComponents: [
    NewNotesModalComponent],
})
export class NotesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialogNotes() {
    const dialogRef = this.dialog.open(NewNotesModalComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
