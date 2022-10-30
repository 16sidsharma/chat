import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatInfoPageRoutingModule } from './chat-info-routing.module';

import { ChatInfoPage } from './chat-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatInfoPageRoutingModule
  ],
  declarations: [ChatInfoPage]
})
export class ChatInfoPageModule {}
