import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { log } from 'util';
import { AuthService } from '../../services/auth.service';

export interface DialogData{

}

@Component({
  selector: 'app-new-password-modal',
  templateUrl: './new-password-modal.component.html',
  styleUrls: ['./new-password-modal.component.scss']
})

export class NewPasswordModalComponent implements OnInit {
  
  public newPassword: FormGroup;
  public user_email;
  errorLogin: boolean;
  showField: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public formbuilder: FormBuilder,
    private authService: AuthService,
    public dialogRef: MatDialogRef<NewPasswordModalComponent>
  ) { }

  ngOnInit() {
    this.newPassword = new FormGroup({
      user_email: new FormControl('', Validators.required)
    });
    this.newPassword = this.formbuilder.group({
      user_email: ['', Validators.required],
    });
  }

  changePassword(newPass) {
    if (this.newPassword.valid) {
      this.showField = true;
      this.authService.forgotPassword(newPass.controls['user_email'].value).subscribe(res => {
        this.errorLogin = false;
        this.showField = true;
        console.log(res); 
      }, (error) => {
        if (error.status === 400) {
          this.errorLogin = true;
          this.showField = false;
        }
      })
    }

  }


}
