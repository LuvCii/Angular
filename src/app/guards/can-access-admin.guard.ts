import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //? 1. Lấy ra thông tin user trong localStorage
    const loggedInUser = localStorage.getItem('loggedInUser');
    //? 2. Kiểm tra xem thông tin có chính xác không
    if (loggedInUser) {
      return true
    }
    //? 3. Nếu đúng thì đi tiếp, nếu sai thì quay về login
    this.router.navigateByUrl('/auth/login')
    return false;
  }

}
