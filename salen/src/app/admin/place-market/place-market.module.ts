import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceMarketPageRoutingModule } from './place-market-routing.module';

import { PlaceMarketPage } from './place-market.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceMarketPageRoutingModule,
    Ng2SearchPipeModule,
  ],
  declarations: [PlaceMarketPage]
})
export class PlaceMarketPageModule {}
