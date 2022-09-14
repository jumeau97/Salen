import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: 'markets',
        pathMatch: 'full'
      },
 
  {
    path: 'market',
    loadChildren: () => import('./market/market.module').then(m => m.MarketPageModule)
  },
  {
    path:'markets',
    loadChildren: () => import('./markets/markets.module').then(m => m.MarketsPageModule)

  },
  {
    path:'market/places/:id',
    loadChildren: () => import('../admin/place-market/place-market.module').then(m => m.PlaceMarketPageModule)
  },
  {
    path: 'paiement',
    loadChildren: () => import('./paiement/paiement.module').then( m => m.PaiementPageModule)
  },
  {
    path: 'bluetooth-connect',
    loadChildren: () => import('./bluetooth-connect/bluetooth-connect.module').then( m => m.BluetoothConnectPageModule)
  },
  // {
  //   path: 'tab1',
  //   loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
  // },
  // {
  //   path: 'tab2',
  //   loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
  // },
  // {
  //   path: 'tab3',
  //   loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: '/tabs/tab1',
  //   pathMatch: 'full'
  // }
    ]
  },
  {
    path: 'details-place',
    loadChildren: () => import('./details-place/details-place.module').then( m => m.DetailsPlacePageModule)
  },

  // {
  //   path: 'market',
  //   loadChildren: () => import('./market/market.module').then( m => m.MarketPageModule)
  // },
  // {
  //   path: 'markets',
  //   loadChildren: () => import('./markets/markets.module').then( m => m.MarketsPageModule)
  // },
  // {
  //   path: 'place-market',
  //   loadChildren: () => import('./place-market/place-market.module').then( m => m.PlaceMarketPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
