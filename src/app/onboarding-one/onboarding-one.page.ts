import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-onboarding-one',
  templateUrl: './onboarding-one.page.html',
  styleUrls: ['./onboarding-one.page.scss'],
})
export class OnboardingOnePage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  constructor() { }

  ngOnInit() {
   
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  next() {
    this.slides.slideNext();
  }
  skip(){}
}