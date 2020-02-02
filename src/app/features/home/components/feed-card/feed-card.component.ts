import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PostModel } from '../../models/post/post.model';

@Component({
  selector: 'one12-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedCardComponent {
  @Input() public post: PostModel;
}
