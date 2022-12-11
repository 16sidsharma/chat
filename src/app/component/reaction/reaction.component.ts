import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.scss'],
})
export class ReactionComponent implements OnInit {
  @Input() message: any;
  @Input() selectedValue: any;
  @Input() selectedIndex: any;
  setEmoji: any = [];
  constructor(
    private messageService : MessageService
  ) { }

  ngOnInit() {
    this.getReaction()
  }

  getReaction() {
    let reaction = new FormData();
    reaction.append('message_id', this.message.id);
    const test = this.messageService.getSpecificMessageReaction(reaction).subscribe(
      (res: any) => {
        if (res['status'] == 1) {
          this.setEmoji = res['data'];
        } else {
          this.setEmoji = [];
          //this.toast.messageToast('Something went wrong!!');
        }
      },
      (error: any) => {
        //this.toast.messageToast('Network Issue.');
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if(this.selectedValue){
        this.setEmoji = this.selectedValue!;
      }
    }
  }
}
