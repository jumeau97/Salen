import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';
// import { AuthGuard } from 'src/guards/auth.guard';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent,
    canActivate:[AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
