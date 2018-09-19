// import { Component, OnInit } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
// import { Params, ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-create-password-modal',
//   templateUrl: './create-password-modal.component.html',
//   styleUrls: ['./create-password-modal.component.scss']
// })
// export class CreatePasswordModalComponent implements OnInit {

//   public createPassword: FormGroup;
//   public password;
//   public confirm_password;
//   private router: Router;
//   loading: false;
//   formError = '';
//   erroLogin: boolean;

//   constructor(
//     public formbuilder: FormBuilder,
//     public dialogRef: MatDialogRef<CreatePasswordModalComponent>,
//     private authService: AuthService,
//     private activatedRoute: ActivatedRoute,
//   ) { }

//   ngOnInit() {
//     this.createPassword = new FormGroup({
//       password: new FormControl('', Validators.required),
//       confirm_password: new FormControl('', Validators.required)
//     });
//     this.createPassword = this.formbuilder.group({
//       password: ['', Validators.required],
//       confirm_password: ['', Validators.required],
//     });
//   }
 
//   createPass(newPass){
//     let password = newPass.controls.password.value;
//     let confpassword = newPass.controls.confirm_password.value;
//     if (password === confpassword) {
//       if (this.createPassword.valid) {
//         this.activatedRoute.queryParams.subscribe((params: Params) => {
//           let email = params['email'];
//           let token = params['token'];
//           this.authService.createNewPassword(newPass.controls['password'].value, email, token).subscribe(
//             res => {
//               localStorage.removeItem('auth');
//               location.reload(true);
//               this.authService.isLoggedIN.next(true);
//               this.router.navigate(['/']);
//             },
//             error => {
//               this.showError(error.error.detail);
//               this.loading = false;
//               this.erroLogin = true;
//             })
//         });
//       }
//     }else{
//       this.erroLogin = true;
//     }
//   }
//   showError(error: string) {
//     this.formError = error;
//     setTimeout(function () {
//       this.formError = '';
//     }.bind(this), 3000);
//   }

// }
