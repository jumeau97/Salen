import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPrintPageRoutingModule } from './test-print-routing.module';

import { TestPrintPage } from './test-print.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestPrintPageRoutingModule
  ],
  declarations: [TestPrintPage]
})
export class TestPrintPageModule {}
