import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {appConfig} from '../../app.config';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input() userId;
  public user;
  public userBlocked;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.http.get(`${appConfig.apiUrl}/users/${params.id}`).subscribe(user => {
          console.log(user);
          this.user = user;
        },
        error => {
          this.userBlocked = true;
        });
    });
  }

}
