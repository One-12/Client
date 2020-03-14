import { Component, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

import { PostResponseModel } from '../../models/post/post-response.model';

@Component({
  selector: 'one12-popular-posts-stream',
  templateUrl: './popular-posts-stream.component.html',
  styleUrls: ['./popular-posts-stream.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularPostsStreamComponent {
  @Input() public popularPosts: PostResponseModel[];
}
