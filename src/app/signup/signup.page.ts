import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastService } from './../service/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private auth: AuthService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    let signup = new FormData();
    signup.append('unique_name', form.value.uname);
    signup.append('name', form.value.name);
    signup.append('email', form.value.email);
    signup.append('password', form.value.password);
    this.auth.signup(signup).subscribe(
      (res: any) => {
        if (res) {
          if (res['status'] == 1) {
            form.resetForm();
            // Storing the User data.
            this.toastService.messageToast(res['message']);
            localStorage.setItem('userID', res['data']['id']);
            this.router.navigate(['home']);
          } else{
            this.toastService.messageToast(res['message']);
          }

        } else {
          this.toastService.messageToast(res['message']);
        }
      },
      (error: any) => {
        this.toastService.messageToast('Network Issue.');
      }
    );
  }
}
