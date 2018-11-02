import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
declare var navigator;


@Component({
  selector: 'app-user-profile-map',
  templateUrl: './user-profile-map.component.html',
  styleUrls: ['./user-profile-map.component.scss']
})
export class UserProfileMapComponent implements OnInit {

  @ViewChild('gmap2') gmapElement: any;
  map: google.maps.Map;
  user: any;
  public userBlocked;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.getUserByUsername(params.id).subscribe(user => {
          this.user = user;
        },
        error => {
          this.userBlocked = true;
        });
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.map = new google.maps.Map(this.gmapElement.nativeElement, {
          center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          zoom: 14,
          gestureHandling: 'cooperative',
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [{
            'featureType': 'all',
            'elementType': 'all',
            // 'stylers': [{'invert_lightness': true}, {'saturation': 10}, {'lightness': 30}, {'gamma': 0.5}, {'hue': '#435158'}]
          }]
        });
        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          map: this.map,
          animation: google.maps.Animation.BOUNCE,
        });
      });

    }

  }

}
