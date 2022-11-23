import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnePagePageRoutingModule } from './one-page-routing.module';

import { OnePagePage } from './one-page.page';
import {TimeAgoPipe} from 'time-ago-pipe';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnePagePageRoutingModule,
    EmojiModule
  ],
  declarations: [OnePagePage, TimeAgoPipe]
})
export class OnePagePageModule {}
