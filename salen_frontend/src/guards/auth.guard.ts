import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private router: Router){}

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any{
    if (!localStorage.getItem('current_session')) {
      return true;
    }else{
      this.router.navigate(['/admin']);
    }
  }

}