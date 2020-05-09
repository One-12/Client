import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { auth } from 'firebase/app';

import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'one12-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public googleIcon = faGoogle;

  public facebookIcon = faFacebookSquare;

  constructor(private readonly _router: Router, public readonly _angularFireAuth: AngularFireAuth) {}

  public ngOnInit(): void {
    this._angularFireAuth.user.subscribe(async user => {
      if (user) {
        await this._router.navigate(['/']);
      }
    });
  }

  public async onContinueLogOutButtonClicked(): Promise<void> {
    await this._angularFireAuth.signOut();
  }

  public async onLoginWithGoogleButtonClicked(): Promise<void> {
    await this._angularFireAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  public async onContinueAsGuestButtonClicked(): Promise<void> {
    await this._router.navigate(['/']);
  }

  public async onLoginWithFacebookButtonClicked(): Promise<void> {
    await this._angularFireAuth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  public async onContinueToHomePageButtonClicked(): Promise<void> {
    await this._router.navigate(['/']);
  }
}
