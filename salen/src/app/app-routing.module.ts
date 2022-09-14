import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // {
  //   path: '',
  //   loadChildren: () => import('./test/test-print/test-print.module').then( m => m.TestPrintPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
