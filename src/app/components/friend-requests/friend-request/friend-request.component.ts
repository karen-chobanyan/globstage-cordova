import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FriendsService } from '../../../services/friends.service';
import { getFromLocalStorage } from '../../../utils/local-storage';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.scss']
})
export class FriendRequestComponent implements OnInit {

  @Input() request;
  @Output() onAdd = new EventEmitter();
  @Output() onIgnore = new EventEmitter();
  public friend_id;

  constructor(
    private http: HttpClient,
    private friendService: FriendsService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  confirmFriend() {
    this.friendService.confirmFriend({ user_id: getFromLocalStorage('GLOBE_USER').id, friend_id: this.request.user.id }).subscribe((res: any) => {
      this.onAdd.emit(res.id);
    })
    this.snackBar.open('Friend added', 'ok', { duration: 3000 });

  }

  unConfirmFriend() {
    this.friendService.unConfirmFriend({ user_id: getFromLocalStorage('GLOBE_USER').id, friend_id: this.request.user.id }).subscribe(res => {
      // this.onIgnore.emit(res.author_id);
    })
    this.snackBar.open('Friend ignored', 'ok', { duration: 3000 });
  }


}
