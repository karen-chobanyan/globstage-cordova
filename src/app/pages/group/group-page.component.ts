import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewGroupModalComponent} from '../../components/new-group-modal/new-group-modal.component';
import {GroupService} from '../../services/group.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss']
})
export class GroupPageComponent implements OnInit {
  group;
  group_id;

  constructor(
    public groupService: GroupService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.group_id = params.id;
      this.groupService.getGroup(this.group_id).subscribe(res => {
          this.group = res;
          console.log(res);
        }
      );
    });
  }

  subscribeToGroup() {
    this.groupService.subscribeToGroup(this.group_id).subscribe(res => {
      console.log(res);
    });
  }

  openDialogGroup() {
    const dialogRef = this.dialog.open(NewGroupModalComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
