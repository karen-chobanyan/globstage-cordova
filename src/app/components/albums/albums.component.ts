import { Component, OnInit } from '@angular/core';
import {NewAlbumModalComponent} from '../new-album-modal/new-album-modal.component';
import {MatDialog} from '@angular/material';
import {AlbumService} from '../../services/album.service';
import { Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums;

  constructor(
    public dialog: MatDialog,
    public albumService: AlbumService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.albumService.getAlbums().subscribe(res => {
      this.albums = res;
    });

    this.route.parent.params.subscribe( params => {
      console.log(params);
      
      // this.albumService.getUserAlbums(params.id).subscribe((albums: any[]) => {
      //   this.albums = albums;
      //   console.log(albums);
      // });
      
    });
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
