import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnePagePage } from './one-page.page';

const routes: Routes = [
  {
    path: '',
    component: OnePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnePagePageRoutingModule {}
