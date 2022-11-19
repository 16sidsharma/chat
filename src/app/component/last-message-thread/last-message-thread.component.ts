import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-last-message-thread',
  templateUrl: './last-message-thread.component.html',
  styleUrls: ['./last-message-thread.component.scss'],
})
export class LastMessageThreadComponent implements OnInit {
  @Input() data: any;
  @Input() count: any;
  userID: string;
  lastActivity : any =[];
  constructor(
    private message : MessageService
  ) { }

  ngOnInit() {
    this.userID = localStorage.getItem('userID');
    this.getLastMessage(this.userID , this.data);
    
  }
  getLastMessage(currentUser, data){
    let chat = new FormData();
    chat.append('sender_id', currentUser);
    chat.append('receiver_id', data.id);
    const test = this.message.getLastMessage(chat).subscribe( 
      (res: any) => {
        if (res['status'] == 1) {
          console.log(res['data']);
          this.lastActivity = res['data'];
        } else {
          this.lastActivity = [];
        }
      },
      (error: any) => {
        this.lastActivity = [];
      }
    );
 }
}
