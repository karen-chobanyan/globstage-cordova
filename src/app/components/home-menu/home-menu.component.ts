import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getFromLocalStorage } from '../../utils/local-storage';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  public user;

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = getFromLocalStorage('GLOBE_USER');

  }
  logOut() {
    localStorage.removeItem('GLOBE_AUTH');
    localStorage.removeItem('GLOBE_USER');
    this.router.navigate(['']);
  }

}
