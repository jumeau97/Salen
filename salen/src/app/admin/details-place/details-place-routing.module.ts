import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPlacePage } from './details-place.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPlacePageRoutingModule {}
