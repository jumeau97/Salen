import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from 'src/guards/auth.guard';


const routes: Routes = [

  {
    // component: AdminComponent,
    path: '',
    // loadChildren: './admin.admin.module#AdminModule',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
 
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
 
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
 
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
