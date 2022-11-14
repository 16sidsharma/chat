import { Directive, ElementRef, Input } from '@angular/core';
import { MessageService} from '../service/message.service';

@Directive({
  selector: '[appReadMessage]'
})
export class ReadMessageDirective {
  @Input() el: HTMLInputElement;
  @Input() data: any;
  @Input() currentUser: any;
  constructor(
    private message: MessageService,
    private elementRef: ElementRef
  ) {
    this.el = this.elementRef.nativeElement;
   }

   ngOnInit() {
    this.getReadStatus(this.currentUser, this.data);
  }

   getReadStatus(currentUser, data){
      let chat = new FormData();
      chat.append('sender_id', currentUser);
      chat.append('receiver_id', data.id);
      const test = this.message.getUnreadMessageCount(chat).subscribe( 
        (res: any) => {
          if (res['status'] == 1) {
            if(res['data'] != 0) {
              this.el.innerHTML =  res['data']; 
            }else {
              this.el.className = 'hidden';
              
            }
            
          } else {
            this.el.className = 'hidden';
          }
        },
        (error: any) => {
          this.el.className = 'hidden';
        }
      );
   }

}
