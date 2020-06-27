import { Location } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'one12-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  public tags: string[];

  /**
   * Creates an instance of PostComponent.
   * @param {Location} _location
   * @memberof PostComponent
   */
  constructor(private readonly _location: Location) {
    this.tags = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8'];
  }

  /**
   * Navigate to Browser's Back Location when Close Button is Clicked.
   * @returns {Promise<void>}
   * @memberof PostComponent
   */
  public async onCloseButtonClicked(): Promise<void> {
    this._location.back();
  }
}
