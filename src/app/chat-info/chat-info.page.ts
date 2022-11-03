import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-chat-info',
  templateUrl: './chat-info.page.html',
  styleUrls: ['./chat-info.page.scss'],
})
export class ChatInfoPage implements OnInit {

  constructor(private location : Location) { }

  ngOnInit() {
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  back() {
    this.location.back();
  }
}
