import {Component, Input, OnInit} from '@angular/core';
import {EmbedVideoService} from '../../services/embed-video.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  player: any;
  @Input() url;

  constructor(
    private embedService: EmbedVideoService
  ) {

  }

  ngOnInit() {
    this.player = this.embedService.embed(this.url);
  }

}
