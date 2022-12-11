import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnePagePageRoutingModule } from './one-page-routing.module';

import { OnePagePage } from './one-page.page';
import {TimeAgoPipe} from 'time-ago-pipe';
import { Ionic4EmojiPickerModule } from 'ionic4-emoji-picker';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { ReactionComponent } from '../component/reaction/reaction.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnePagePageRoutingModule,
    Ionic4EmojiPickerModule,
    EmojiModule
  ],
  declarations: [OnePagePage, TimeAgoPipe, ReactionComponent]
})
export class OnePagePageModule {}
