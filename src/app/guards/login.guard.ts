import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree => {
  const user = UserService.getStatusUser();
  if(user){
    return true;
  }
  return inject(Router).createUrlTree(["/","login"]);
};
