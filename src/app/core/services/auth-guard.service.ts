import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService {

  constructor(private authentication: AuthenticationService, private router: Router) { }

  canActivate(): boolean | Promise<boolean> {
		let token = this.authentication.getToken();
		let accessToken = this.authentication.getAccessToken();

		if (!token) {
			console.error("User is not authenticated.");
			this.redirectToLoginPage();
			return false;
		}
		else if (this.authentication.isAuthenticated()) {
			return true;
		}
		else {
      this.authentication.refreshToken();
      return true;
		}
  }
  
  redirectToLoginPage() {
    this.router.navigate(['/login']);
}

}
