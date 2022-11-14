import { Component, OnInit } from '@angular/core';
import { AuthService} from './../service/auth.service';
import { ToastService } from './../service/toast.service';
import { MessageService } from './../service/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public userID: string;
  public chatList = [];

  constructor(
    private auth: AuthService,
    private toastService: ToastService,
    private message: MessageService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.userID = localStorage.getItem('userID');
      let chat = new FormData();
      chat.append('id', this.userID);
      this.auth.common('users/allRegisteredUserExceptLogin',chat).subscribe(
        (res: any) => {
          if (res) {
            this.chatList = res; 
          } else {
            this.chatList = [];
          }
        },
        (error: any) => {
          this.toastService.messageToast('Network Issue.');
        }
      );
    }
}
