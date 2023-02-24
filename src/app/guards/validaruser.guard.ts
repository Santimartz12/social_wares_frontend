import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidaruserGuard implements CanActivate, CanLoad {

  constructor(private authServices: AuthService, private router : Router){}

  canActivate(): Observable<boolean> | boolean {

    console.log('Can Activate');
    if(this.authServices.cargarLocalStg() == null){
      this.router.navigate(['/auth/register']);
      return false;
    }
    return true;
  }
  canLoad(): Observable<boolean> | boolean {
    console.log('Can Load');
    if(this.authServices.cargarLocalStg() == null){
      this.router.navigate(['/auth/register']);
      return false;
    }
    return true;
  }
}
