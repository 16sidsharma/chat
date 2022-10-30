import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllRateingPageRoutingModule } from './all-rateing-routing.module';

import { AllRateingPage } from './all-rateing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllRateingPageRoutingModule
  ],
  declarations: [AllRateingPage]
})
export class AllRateingPageModule {}
