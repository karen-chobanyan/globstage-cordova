import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {} from 'googlemaps';


@Component({
  selector: 'app-user-glob-tabs',
  templateUrl: './user-glob-tabs.component.html',
  styleUrls: ['./user-glob-tabs.component.scss']
})
export class UserGlobTabsComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  @Input() user;

  constructor() { }

  ngOnInit() {
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, {
    //   center: new google.maps.LatLng(40.089099, 44.538189),
    //   zoom: 10,
    //   gestureHandling: 'cooperative',
    //   styles: [{
    //     'featureType': 'all',
    //     'elementType': 'all',
    //     'stylers': [{'invert_lightness': true}, {'saturation': 10}, {'lightness': 30}, {'gamma': 0.5}, {'hue': '#435158'}]
    //   }],
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // });
  }

}
