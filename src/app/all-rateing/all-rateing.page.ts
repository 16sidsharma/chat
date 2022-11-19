import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
@Component({
  selector: 'app-all-rateing',
  templateUrl: './all-rateing.page.html',
  styleUrls: ['./all-rateing.page.scss'],
})
export class AllRateingPage implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit() {
  }
  back() {
    this.location.back();
  }

}
