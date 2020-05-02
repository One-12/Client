import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'one12-time-line-header',
  templateUrl: './time-line-header.component.html',
  styleUrls: ['./time-line-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeLineHeaderComponent implements OnInit {
  public socialUser: SocialUser;

  constructor(private readonly _authService: AuthService, private readonly _router: Router) {}

  ngOnInit(): void {
    this._authService.authState.subscribe(user => (this.socialUser = user));
  }

  public async onLoginButtonClicked(): Promise<void> {
    await this._router.navigate(['/login']);
  }
}
