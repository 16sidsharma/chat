import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastService } from './../service/toast.service';
import {  MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('f', {static:false}) slForm: NgForm;
  constructor(
    private auth: AuthService,
    private toastService: ToastService,
    private router: Router,
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    //this.menuCtrl.enable(false);
  }

  onSubmit(form: NgForm) {
    let login = new FormData();
    login.append('email', form.value.email);
    login.append('password', form.value.password);
    this.auth.login(login).subscribe(
      (res: any) => {
        if (res) {
          if (res['status'] == 1) {
            // Storing the User data.
            form.resetForm();
            localStorage.setItem('userID', res['data']['id']);
            this.router.navigate(['home']);
          } else {
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
