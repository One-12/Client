import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { PostResponseModel } from '../../models/post/post-response.model';

@Component({
  selector: 'one12-popular-posts-stream',
  templateUrl: './popular-posts-stream.component.html',
  styleUrls: ['./popular-posts-stream.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularPostsStreamComponent {
  @Input() public popularPosts: PostResponseModel[];

  @Input() public isFetchingPopularPosts: boolean;

  public popularPostsShadowedItems: number[];

  constructor(@Inject(DOCUMENT) private readonly _document: Document) {
    this.popularPostsShadowedItems = Array(20).fill(0);
  }

  public async scrollLeft(): Promise<void> {
    this._document.getElementById('popular-posts-wrapper').scrollLeft -= 200;
  }

  public async scrollRight(): Promise<void> {
    this._document.getElementById('popular-posts-wrapper').scrollLeft += 200;
  }
}
