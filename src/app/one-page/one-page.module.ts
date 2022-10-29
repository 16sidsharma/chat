import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnePagePageRoutingModule } from './one-page-routing.module';

import { OnePagePage } from './one-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnePagePageRoutingModule
  ],
  declarations: [OnePagePage]
})
export class OnePagePageModule {}
