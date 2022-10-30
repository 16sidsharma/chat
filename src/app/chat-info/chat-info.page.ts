import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-info',
  templateUrl: './chat-info.page.html',
  styleUrls: ['./chat-info.page.scss'],
})
export class ChatInfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
