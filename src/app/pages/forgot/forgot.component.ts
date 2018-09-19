import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Params, ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {


  public createPassword: FormGroup;
  public password;
  public confirm_password;
  
  loading: false;
  formError = '';
  erroLogin: boolean;

  constructor(
    public formbuilder: FormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.createPassword = new FormGroup({
      new_password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required)
    });
    this.createPassword = this.formbuilder.group({
      new_password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    });

  }

  createPass(newPass){
    let password = newPass.controls.new_password.value;
    let confpassword = newPass.controls.confirm_password.value;
    if (password && password === confpassword) {

        this.activatedRoute.queryParams.subscribe((params: Params) => {
          this.authService.createNewPassword(password, confpassword, params.hash).subscribe(
            res => {
              this.router.navigate(['/']);
            },
            error => {
              this.showError(error.error.detail);
              this.loading = false;
              this.erroLogin = true;
            })
        });
    }else{
      this.erroLogin = true;
    }
  }
  showError(error: string) {
    this.formError = error;
    setTimeout(function () {
      this.formError = '';
    }.bind(this), 3000);
  }

}
