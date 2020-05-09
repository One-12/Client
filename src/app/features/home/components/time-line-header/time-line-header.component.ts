import { User } from 'firebase';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthService } from '../../../../core/auth/services/auth.service';

@Component({
  selector: 'one12-time-line-header',
  templateUrl: './time-line-header.component.html',
  styleUrls: ['./time-line-header.component.scss'],
})
export class TimeLineHeaderComponent implements OnInit {
  public user: User;

  constructor(
    private readonly _router: Router,
    private readonly _authService: AuthService,
    private readonly _angularFireAuth: AngularFireAuth,
  ) {}

  public ngOnInit(): void {
    this._angularFireAuth.authState.subscribe(user => {
      this.user = user;
    });

    this._angularFireAuth.idToken.subscribe(idToken => {
      this._authService.idToken = idToken;
    });
  }

  public async onLoginButtonClicked(): Promise<void> {
    await this._router.navigate(['/login']);
  }

  public async onLogOutButtonClicked(): Promise<void> {
    await this._angularFireAuth.signOut();
  }
}
