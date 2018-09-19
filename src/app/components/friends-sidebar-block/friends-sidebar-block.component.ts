import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { FriendsService } from '../../services/friends.service';


@Component({
  selector: 'app-friends-sidebar-block',
  templateUrl: './friends-sidebar-block.component.html',
  styleUrls: ['./friends-sidebar-block.component.scss']
})
export class FriendsSidebarBlockComponent implements OnInit, OnChanges {

  public friends;
  @Input() userId;
  friendsOnline: any[];

  constructor(private friendService: FriendsService) { }

  ngOnInit() {
    this.friendService.getFriends(this.userId).subscribe(res => {
      this.friends = res;
    });
  }

  ngOnChanges() {
    this.friendService.getFriends(this.userId).subscribe(res => {
      this.friends = res;
    });
  }

}
