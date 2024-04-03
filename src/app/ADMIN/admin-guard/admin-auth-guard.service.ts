import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { AuthService } from "../service/auth.service";

@Injectable({
  providedIn: "root",
})
export class AdminAuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log("Is Authenticated: ", this.authService.isAuthenticated());
    console.log("Is Admin: ", this.authService.isAdmin());
  
    if (this.authService.isAuthenticated() && this.authService.isAdmin()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
  
}
