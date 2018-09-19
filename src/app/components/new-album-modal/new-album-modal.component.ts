import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {AlbumService} from '../../services/album.service';
import {log} from 'util';

@Component({
  selector: 'app-new-album-modal',
  templateUrl: './new-album-modal.component.html',
  styleUrls: ['./new-album-modal.component.scss']
})
export class NewAlbumModalComponent implements OnInit {

  selected1 = 'option1';
  selected2 = 'option1';
  newAlbum: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NewAlbumModalComponent>,
    private albumService: AlbumService,
    private _fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.newAlbum = this._fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createAlbum($event) {
    if (this.newAlbum.valid) {
      this.albumService.createAlbum(this.newAlbum.value).subscribe(res => {
        console.log(res);
      });
    }
  }

}
