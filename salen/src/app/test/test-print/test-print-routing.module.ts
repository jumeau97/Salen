import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestPrintPage } from './test-print.page';

const routes: Routes = [
  {
    path: '',
    component: TestPrintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestPrintPageRoutingModule {}
