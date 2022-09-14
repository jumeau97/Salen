import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceMarketPage } from './place-market.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceMarketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceMarketPageRoutingModule {}
