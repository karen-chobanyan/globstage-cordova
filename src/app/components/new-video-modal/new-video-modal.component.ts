import {Component, OnInit, Input} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {VideoService} from '../../services/video.service';
import {EmbedVideoService} from '../../services/embed-video.service';

@Component({
  selector: 'app-new-video-modal',
  templateUrl: './new-video-modal.component.html',
  styleUrls: ['./new-video-modal.component.scss']
})
export class NewVideoModalComponent implements OnInit {
  @Input() videoPost;
  videosPosts = [];
  selected3 = '1';
  public newpostvideo: FormGroup;
  public selectmembers = {};
  thumbUrl;

  constructor(
    public dialogRef: MatDialogRef<NewVideoModalComponent>,
    public videoServices: VideoService,
    private embedVideoService: EmbedVideoService
  ) {

  }

  ngOnInit() {
    this.newpostvideo = new FormGroup({
      linkvideo: new FormControl('', Validators.required),
      namevideo: new FormControl(''),
      descvideo: new FormControl(),
      selectmembers: new FormControl('1'),
    });

    this.newpostvideo.get('linkvideo').valueChanges.subscribe(val => {
      console.log(val);
      this.getThumbnail(val);
    });
  }

  getNotification(name) {
    console.log(name);
  }

  done() {
    if (this.newpostvideo.valid) {
      this.videoServices.addVideo(
        {
          'video_name': this.newpostvideo.value.namevideo,
          'link_to_videos': this.newpostvideo.value.linkvideo,
          'video_description': this.newpostvideo.value.descvideo,
          'privacy': this.newpostvideo.value.selectmembers,
          'video_image': '',
        }).subscribe(res => {
        this.dialogRef.close(res);
      });
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getThumbnail(url) {
    console.log(url);
    if (url && url.match(/youtube.com/) || (url && url.match(/vimeo.com/))) {
      this.thumbUrl = this.embedVideoService.embed(url);
    }
  }


}
