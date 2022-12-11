import { Component, OnInit } from '@angular/core';
import {Gallery} from 'angular-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})

export class GalleryPage implements OnInit {
index: number;

  constructor(private gallery: Gallery) { }

  ngOnInit() {
  }
  showGallery(index: number) {
    let prop = {
        images: [
            {path: 'assets/Rectangle 38.png'}, 
            {path: 'assets/Rectangle 39.png'}, 
            {path: 'assets/Rectangle 41.png'}, 
            {path: 'assets/Rectangle 42.png'}, 
            {path: 'assets/Rectangle 43.png'}, 
            {path: 'assets/Rectangle 44.png'}, 

        ],
        index
    };
    this.gallery.load(prop);
}
}
