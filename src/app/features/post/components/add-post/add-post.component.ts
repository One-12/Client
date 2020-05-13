import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'one12-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  public ngOnInit(): void {}

  public async onBackButtonClicked(): Promise<void> {
    await this._router.navigate(['/']);
  }
}
