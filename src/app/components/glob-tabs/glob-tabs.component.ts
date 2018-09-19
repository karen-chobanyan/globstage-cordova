import {Component, OnInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {} from 'googlemaps';
import {MatDialog} from '@angular/material';
import {NewAlbumModalComponent} from '../new-album-modal/new-album-modal.component';



@Component({
  selector: 'app-glob-tabs',
  templateUrl: './glob-tabs.component.html',
  styleUrls: ['./glob-tabs.component.scss'],
  entryComponents: [
    NewAlbumModalComponent
  ],
})
export class GlobTabsComponent implements OnInit {


  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {



  }


  openDialogAlbum() {
    const dialogRef = this.dialog.open(NewAlbumModalComponent, {
      height: 'auto',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
