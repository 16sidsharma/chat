import { Component, OnInit } from '@angular/core';
import { GalleryPage } from '../gallery/gallery.page';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'], 
})
export class ChatsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  count =[1,3,3,4,5,6,7]

}
