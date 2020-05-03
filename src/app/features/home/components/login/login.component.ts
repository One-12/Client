import { Router } from '@angular/router';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'one12-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public googleIcon = faGoogle;

  public loggedInUser: SocialUser;

  public facebookIcon = faFacebookSquare;

  constructor(private readonly _router: Router, private readonly _authService: AuthService) {
    this._authService.authState.subscribe(_user => (this.loggedInUser = _user));
  }

  public async onLoginWithGoogleButtonClicked(): Promise<void> {
    await this._authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public async onLoginWithFacebookButtonClicked(): Promise<void> {
    await this._authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  public async onContinueAsGuestButtonClicked(): Promise<void> {
    await this._router.navigate(['/']);
  }
}
