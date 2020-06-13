import { User } from 'firebase';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthService } from '../../../../core/auth/services/auth.service';

@Component({
  selector: 'one12-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public user: User;

  /**
   * Creates an instance of HeaderComponent.
   * @param _router
   * @param _authService
   * @param _angularFireAuth
   */
  constructor(
    private readonly _router: Router,
    private readonly _authService: AuthService,
    private readonly _angularFireAuth: AngularFireAuth,
  ) {}

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   */
  public ngOnInit(): void {
    this._angularFireAuth.authState.subscribe(user => {
      this.user = user;
    });

    this._angularFireAuth.idToken.subscribe(idToken => {
      this._authService.idToken = idToken;
    });
  }

  /**
   * Event Handler when Login Button is Clicked.
   */
  public async onLoginButtonClicked(): Promise<void> {
    await this._router.navigate(['/login']);
  }

  /**
   * Event Handler when Logout Button is Clicked.
   */
  public async onLogOutButtonClicked(): Promise<void> {
    await this._angularFireAuth.signOut();
  }
}
