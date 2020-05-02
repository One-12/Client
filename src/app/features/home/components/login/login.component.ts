import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'one12-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public facebookIcon = faFacebookSquare;

  public googleIcon = faGoogle;

  public;

  constructor() {}

  ngOnInit(): void {}
}
