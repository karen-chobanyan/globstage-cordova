import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { getFromLocalStorage } from '../../utils/local-storage';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public changePassword: FormGroup;
  public nameLastname: FormGroup;

  public viewVerification = false;
  public closeBtnVerify = true;
  public user: any = {};

  constructor(
    private userService: UserService,
    public formbuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.changePassword = this.formbuilder.group({
      user_password: ['', Validators.required],
      new_password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    });

    this.nameLastname = this.formbuilder.group({
      user_name: ['', Validators.required],
      user_last_name: ['', Validators.required],
    });

    this.userService.getUser(getFromLocalStorage('GLOBE_USER').id).subscribe((user: any) => {
      this.user = user;
    this.nameLastname = new FormGroup({
      user_name: new FormControl(user.user_name),
      user_last_name: new FormControl(user.user_last_name),
  });

});

  }

  openVerification() {
    this.viewVerification = true;
    this.closeBtnVerify = false;
  }

  
  changePass(changePassword) {
    this.userService.newPassword(changePassword.value).subscribe( pass => {
      
    });
  }

  changeName(nameLastname) {
    this.userService.newName(nameLastname.value).subscribe( name => {
      
    });
  }

}
