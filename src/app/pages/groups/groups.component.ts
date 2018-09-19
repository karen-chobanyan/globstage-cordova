import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewGroupModalComponent} from '../../components/new-group-modal/new-group-modal.component';
import {GroupService} from '../../services/group.service';


@Component({
  selector: 'app-group',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
  entryComponents: [
    NewGroupModalComponent],
})
export class GroupsComponent implements OnInit {
  groups;

  constructor(
    public dialog: MatDialog,
    public groupService: GroupService) {
  }

  ngOnInit() {
    this.groupService.getGroups().subscribe(res => {
      this.groups = res;
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
