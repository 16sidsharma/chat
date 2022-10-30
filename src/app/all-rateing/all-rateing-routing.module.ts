import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllRateingPage } from './all-rateing.page';

const routes: Routes = [
  {
    path: '',
    component: AllRateingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllRateingPageRoutingModule {}
