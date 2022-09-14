// import { Injectable } from '@angular/core';
// import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminGuard implements CanActivate {

//   constructor(private router: Router){}

//   canActivate(){
//     if (localStorage.getItem('current_session')) {
//       return true;
//     }else{
//       this.router.navigate(['/login']);
//     }
//   }

// }
@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {

        if (localStorage.getItem('current_session')) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }

    }
}