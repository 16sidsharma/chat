import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { MessageService } from "./../service/message.service";
import { AuthService } from "./../service/auth.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.page.html',
  styleUrls: ['./one-page.page.scss'],
})
export class OnePagePage implements OnInit {
  isModalOpen = false;
  currentUser : any = '';
  threadId : any;
  messageThread: any = [];
  text: any = '';
  openChatUser: any = ''

  constructor(
    private location : Location,
    private message : MessageService,
    private auth : AuthService,
    private route: ActivatedRoute
    ) { }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  ngOnInit() {
    this.currentUser = localStorage.getItem('userID');
    this.openChatUser = this.route.snapshot.params.id
    //this.threadId = this.message.UUID();
    this.threadId = this.message.generateThreadId(this.currentUser , this.openChatUser);
    let chat = new FormData();
    chat.append('sender_id', this.currentUser);
    chat.append('receiver_id', this.openChatUser);
    chat.append('thread_id', this.threadId);
    this.message.getConversation(chat).subscribe( 
      (res: any) => {
        if (res['status'] == 1) {
          this.messageThread = res['data']; 
        } else {
          this.messageThread = [];
        }
      },
      (error: any) => {
        //this.toastService.messageToast('Network Issue.');
      }
    );
  }

  back() {
    this.location.back();
  }

  sendMessage() {
    let chat = new FormData();
    chat.append('sender_id', this.currentUser);
    chat.append('receiver_id', this.openChatUser);
    chat.append('message', this.text);
    chat.append('thread_id', this.threadId);
    this.auth.common('conversation/startConversation',chat).subscribe( 
      (res: any) => {
        this.text = '';
        if (res['status'] == 1) {
          console.log(res['data'] ,'fdfddsds') 
          this.messageThread.push(res['data']); 
          console.log(this.messageThread ,'dsds') 
        } else {
          //this.messageThread = [];
        }
      },
      (error: any) => {
        //this.toastService.messageToast('Network Issue.');
      }
    );
  }

}
