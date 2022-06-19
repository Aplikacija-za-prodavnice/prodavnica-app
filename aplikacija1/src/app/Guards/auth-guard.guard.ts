import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AccountService } from '../servisi/account/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanLoad {
  constructor(private router:Router,private accountService:AccountService){

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.accountService.isUserAuthenticated.pipe(
        take(1),
        tap(isAuthenticated=>{
          if(!isAuthenticated){
            this.router.navigateByUrl('/login');
          }
        }));
  }
}
