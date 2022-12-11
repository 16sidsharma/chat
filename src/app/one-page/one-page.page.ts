import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { Location } from "@angular/common";
import { MessageService } from "./../service/message.service";
import { AuthService } from "./../service/auth.service";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastService } from './../service/toast.service';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.page.html',
  styleUrls: ['./one-page.page.scss'],
})
export class OnePagePage implements OnInit {
  isModalOpen = false;
  toggled: boolean = false;
  currentUser: any = '';
  threadId: any;
  messageThread: any = [];
  text: any = '';
  openChatUser: any = '';
  showEmojiPicker: boolean = false;
  isOpen = false;
  showButtons: boolean = false;
  setEmo: boolean = false;
  reaction: any = [];
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  anonymous: any;
  timer: number;
  @ViewChild('popover') popover;
  obj = [
    { id: "1", name: "smiley" },
    { id: "2", name: "pensive" },
    { id: "3", name: "angry" },
    { id: "4", name: "heart" }

  ]
  setItem: any;
  clickedIndex: any;
  setClickedIndex: any;
  dynamicData: any = {};
  constructor(
    private location: Location,
    private message: MessageService,
    private auth: AuthService,
    private route: ActivatedRoute,
    private toast: ToastService,
    private cdr: ChangeDetectorRef,
    private router: Router, 
    private actionSheet: ActionSheetController
  ) {
    let visitPage = '/one-page/' + this.route.snapshot.params.id + '/' + this.route.snapshot.params.id2;
    //console.log(visitPage)
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 
        if(visitPage === ev.urlAfterRedirects) {
          this.timer = 1000;
          let interval =  setInterval(()=>{
            if(this.timer === 0){
              clearInterval(interval);
            }
            this.openChat();
            this.readMessage();
            
        },this.timer)
        }else {
          this.timer = 0 ;
        }
        
        
      }
    });
   }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  ngOnInit() {
    this.currentUser = localStorage.getItem('userID');
    this.openChatUser = this.route.snapshot.params.id;
    this.anonymous = this.route.snapshot.params.id2;
    //this.threadId = this.message.UUID();
    this.getChat()
    
    this.readMessage()
    // let timerId = setInterval(() => 
    // ,
    //  1000);
  }
  ngAfterViewInit() {
    this.scrollToBottom()
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    //console.log('inside')
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  readMessage() {
    let chat = new FormData();
    chat.append('sender_id', this.currentUser);
    chat.append('receiver_id', this.openChatUser);
    const test = this.message.updateUnreadMessage(chat).subscribe(
      (res: any) => {
      },
      (error: any) => {
        this.toast.messageToast('Network Issue.');
      }
    );
  }

  back() {
    this.location.back();
  }

  sendMessage() {
    if (this.text) {
      let chat = new FormData();
      chat.append('sender_id', this.currentUser);
      chat.append('receiver_id', this.openChatUser);
      chat.append('message', this.text);
      chat.append('thread_id', this.threadId);
      this.auth.common('conversation/startConversation', chat).subscribe(
        (res: any) => {
          this.text = '';
          if (res['status'] == 1) {
            this.messageThread.push(res['data']);
            //this.scrollToBottom()
          } else {
            //this.messageThread = [];
          }
        },
        (error: any) => {
          this.toast.messageToast('Network Issue.');
        }
      );
    }

  }

  deleteAllChat() {
    let chat = new FormData();
    chat.append('sender_id', this.currentUser);
    chat.append('receiver_id', this.openChatUser);
    const test = this.message.clearChat(chat).subscribe(
      (res: any) => {
        if (res['status'] == 1) {
          this.messageThread = [];
          this.isOpen = false;
        } else {
          this.toast.messageToast('Something went wrong!!');
        }
      },
      (error: any) => {
        this.toast.messageToast('Network Issue.');
      }
    );
  }

  addEmoji(event) {
    this.text = this.text + event.data;
    this.showEmojiPicker = false;
    //Concatinate the emoji with text 
  }
  openMenu(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
  getEmoji(name, data, index) {
    let react = new FormData();
    react.append('sender_id', this.currentUser);
    react.append('receiver_id', this.openChatUser);
    react.append('reaction', name);
    react.append('message_id', data.id);
    const reaction = this.message.addReaction(react).subscribe(
      (res: any) => {
        if (res['status'] == 1) {
          this.setClickedIndex = index;
          this.reaction = res['reaction'];
          this.onClose();
        } else {
          this.reaction = [];
          this.toast.messageToast('Something went wrong!!');
        }
      },
      (error: any) => {
        this.toast.messageToast('Network Issue.');
      }
    );
  }
  setEmoji(name) {
    if (name === "angry") {
      this.setItem = "angry"
    }
    else if (name === "pensive") {
      this.setItem = "pensive"

    }
    else if (name === "smiley") {
      this.setItem = "smiley"
    }
    else if (name === "heart") {
      this.setItem = "heart"
    }
    this.showButtons = false;
    this.setEmo = true;
  }
  onClick(index, data) {
    this.showButtons = true;
    this.clickedIndex = index;
    this.dynamicData = data;
  }
  onClose() {
    this.showButtons = false;
    this.dynamicData = {};
  }
  getChat() {
    this.threadId = this.message.generateThreadId(this.currentUser, this.openChatUser);
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
        this.toast.messageToast('Network Issue.');
      }
    );
  }

  openChat() {
    this.threadId = this.message.generateThreadId(this.currentUser, this.openChatUser);
    let chat = new FormData();
    chat.append('sender_id', this.currentUser);
    chat.append('receiver_id', this.openChatUser);
    this.message.getOpenChatMessage(chat).subscribe(
      (res: any) => {
        if (res['status'] == 1) {
          const d = res['data'];
            d.forEach(r => {
              console.log(r)
              this.messageThread.push(r);
          });
        } else {
          //this.messageThread = [];
        }
      },
      (error: any) => {
        this.toast.messageToast('Network Issue.');
      }
    );
  }

  deleteSingleChatApi(data) {
    let chat = new FormData();
    chat.append('sender_id', this.currentUser);
    chat.append('receiver_id', this.openChatUser);
    chat.append('message_id', data.id);
    const test = this.message.clearSingleChat(chat).subscribe(
      (res: any) => {
        if (res['status'] == 1) {
          //console.log(res['data']);
          this.messageThread = this.messageThread.filter(item => item.id !== res['data'].id);
          this.onClose()
        } else {
          this.toast.messageToast('Something went wrong!!');
        }
      },
      (error: any) => {
        this.toast.messageToast('Network Issue.');
      }
    );
  }
  deleteSingleChat(data) {
    this.deleteSingleChatApi(data);
  }

  pinSingleChat(data) {
    let chat = new FormData();
    chat.append('sender_id', this.currentUser);
    chat.append('receiver_id', this.openChatUser);
    chat.append('message_id', data.id);
    const test = this.message.pinChatMessage(chat).subscribe(
      (res: any) => {
        if (res['status'] == 1) {
          this.toast.messageToast('Pinned Message!!');
          this.onClose()
        } else {
          this.toast.messageToast('Something went wrong!!');
        }
      },
      (error: any) => {
        this.toast.messageToast('Network Issue.');
      }
    );
  }

  openUploadOption() {
    this.actionSheet.create({
      header: 'Albums',
      cssClass: 'my-action-sheet-class',
      buttons: [{
        text: 'Select From Gallery',
        icon: 'share',
        handler: () => {
          console.log('Select From Gallery');
        }
      }, {
        text: 'Camera',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    }).then(res => {
      res.present();
    });
  }
}
