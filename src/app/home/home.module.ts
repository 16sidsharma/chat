import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { TabsPage } from '../tabs/tabs.page';
import { HeaderComponent } from '../component/header/header.component';
import { LastMessageThreadComponent } from '../component/last-message-thread/last-message-thread.component';
import { ReadMessageDirective } from './../directive/read-message.directive';
import {TimeAgoPipe} from 'time-ago-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, HeaderComponent, ReadMessageDirective, LastMessageThreadComponent, TimeAgoPipe]
})
export class HomePageModule {}
