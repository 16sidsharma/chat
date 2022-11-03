import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.page.html',
  styleUrls: ['./one-page.page.scss'],
})
export class OnePagePage implements OnInit {
  isModalOpen = false;

  constructor(
    private location : Location) { }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  ngOnInit() {
  }

  back() {
    this.location.back();
  }

}
