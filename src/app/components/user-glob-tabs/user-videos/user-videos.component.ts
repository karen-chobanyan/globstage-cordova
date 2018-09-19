import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewVideoModalComponent} from '../../new-video-modal/new-video-modal.component';
import {VideoService} from '../../../services/video.service';
import {VideoPlayerComponent} from '../../video-player/video-player.component';
import { Router, ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-videos',
  templateUrl: './user-videos.component.html',
  styleUrls: ['./user-videos.component.scss'],
  entryComponents: [
    NewVideoModalComponent,
    VideoPlayerComponent
  ],
})


export class UserVideosComponent implements OnInit {
  videos = [];

  constructor(
    public dialog: MatDialog,
    public videoServices: VideoService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.parent.params.subscribe( params => {
      console.log(params);
      this.videoServices.getUserVideos(params.id).subscribe((videos: any[]) => {
        this.videos = videos;
        console.log(videos);
      });
    });
  }

  openDialogVideo() {
    const dialogRef = this.dialog.open(NewVideoModalComponent, {
      height: 'auto',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.videos.push(result);
      }
    });
  }

  delete(id) {
    this.videoServices.deleteVideo(id).subscribe( res => {
      this.videos = this.videos.filter(v => v.id !== id);
    });
  }

  playVideo() {
    const dialogRef = this.dialog.open(VideoPlayerComponent, {
      height: 'auto',
      width: '600px'
    });
  }

}
