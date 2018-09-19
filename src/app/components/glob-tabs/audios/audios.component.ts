import {Component, OnInit} from '@angular/core';
import {NewAudioModalComponent} from '../../new-audio-modal/new-audio-modal.component';
import {MatDialog} from '@angular/material';
import {AudioService} from '../../../services/audio.service';


@Component({
  selector: 'app-audios',
  templateUrl: './audios.component.html',
  styleUrls: ['./audios.component.scss'],
  entryComponents: [
    NewAudioModalComponent],
})
export class AudiosComponent implements OnInit {
  audios = [];

  constructor(
    public dialog: MatDialog,
    public audioServices: AudioService,
  ) {
  }

  ngOnInit() {

    this.audioServices.getAudios().subscribe(
      (audios: any[]) => {
        this.audios = audios;
        console.log(audios);
      });

  }

  openDialogAudio() {
    const dialogRef = this.dialog.open(NewAudioModalComponent, {
      height: '350px',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
