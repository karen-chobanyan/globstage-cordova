import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SearchAllComponent } from '../search-all/search-all.component';
import { TranslateService } from '@ngx-translate/core';
import { FriendsService } from "../../services/friends.service";
import {getFromLocalStorage} from '../../utils/local-storage';
import {ChatAdapter} from '../../components/ng-chat';
import {GlobeAdapter} from '../../services/chatAdapter';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userId = getFromLocalStorage('GLOBE_USER') ? getFromLocalStorage('GLOBE_USER').id : null;
  friendRequests: any[];


  @Input()
  public isCollapsed = false;
  public selectedOption = 'En';
  public adapter: ChatAdapter = this.chatAdapter;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public translate: TranslateService,
    private friendService: FriendsService,
    private chatAdapter: GlobeAdapter,
  ) {

  }

  ngOnInit() {
    this.getFriendRequests();

  }

  getFriendRequests() {
    this.friendService.getFriendRequests().subscribe((res: any[]) => {
      this.friendRequests = res;
      console.log(res);
    })

  }
  openDialogSearch() {
    const dialogRef = this.dialog.open(SearchAllComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  logOut() {
    localStorage.removeItem('GLOBE_AUTH');
    localStorage.removeItem('GLOBE_USER');
    this.router.navigate(['']);
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }
  onChatTitleClicked(event: any): void {
    this.isCollapsed = !this.isCollapsed;
  }

  changeLang(e) {
    this.selectedOption = e.value;
    this.translate.use(e.value);
  }
  ngOnChanges() {
    this.userId = getFromLocalStorage('GLOBE_USER') ? getFromLocalStorage('GLOBE_USER').id : null;
  }

}
