import { Component, OnInit, Input } from '@angular/core';
import { FriendsService } from "../../services/friends.service";
import { MatSnackBar } from "@angular/material";


@Component({
  selector: 'app-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrls: ['./friend-requests.component.scss']
})
export class FriendRequestsComponent implements OnInit {

  @Input() friendRequests: any[];

  constructor(private friendService: FriendsService, public snackBar: MatSnackBar,) { }

  ngOnInit() {
   
  }

}
