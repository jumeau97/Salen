import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPlacePageRoutingModule } from './details-place-routing.module';

import { DetailsPlacePage } from './details-place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPlacePageRoutingModule
  ],
  declarations: [DetailsPlacePage]
})
export class DetailsPlacePageModule {}
