import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatInfoPage } from './chat-info.page';

const routes: Routes = [
  {
    path: '',
    component: ChatInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatInfoPageRoutingModule {}
