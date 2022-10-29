import { Component, OnInit } from '@angular/core';
import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.page.html',
  styleUrls: ['./one-page.page.scss'],
})
export class OnePagePage implements OnInit {
  isModalOpen = false;

  constructor() { }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  ngOnInit() {
  }

  

}
