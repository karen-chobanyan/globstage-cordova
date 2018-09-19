import {Component, Input, OnInit} from '@angular/core';
import {appConfig} from '../../app.config';
import { ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-user-friend',
  templateUrl: './user-friend.component.html',
  styleUrls: ['./user-friend.component.scss']
})
export class UserFriendComponent implements OnInit {

  @Input() friend;
  public user;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.http.get(`${appConfig.apiUrl}/users/${params.id}`).subscribe(user => {
        console.log(user);
        this.user = user;
      });
    });
  }

}
