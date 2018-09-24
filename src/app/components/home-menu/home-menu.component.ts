import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getFromLocalStorage, setToLocalStorage } from '../../utils/local-storage';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  public user;
  public selectedOption = getFromLocalStorage('GLOBE_LANG') || 'En';

  constructor(
    private router: Router,
    public translate: TranslateService
  ) { }

  ngOnInit() {
    this.user = getFromLocalStorage('GLOBE_USER');

  }
  logOut() {
    localStorage.removeItem('GLOBE_AUTH');
    localStorage.removeItem('GLOBE_USER');
    this.router.navigate(['']);
  }
  changeLang(e) {
    this.selectedOption = e.value;
    this.translate.use(e.value);
    setToLocalStorage('GLOBE_LANG', e.value);
  }



}
