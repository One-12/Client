import { Component, ChangeDetectionStrategy } from '@angular/core';
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'one12-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public facebookIcon = faFacebookSquare;

  public googleIcon = faGoogle;

  constructor(private readonly _router: Router, private readonly _authService: AuthService) {
    this._authService.authState.subscribe(console.log);
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
