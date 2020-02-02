import { Component, Input, Output } from '@angular/core';
import { ChangeDetectionStrategy, EventEmitter } from '@angular/core';

import { PostModel } from '../../models/post/post.model';

@Component({
  selector: 'one12-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedCardComponent {
  @Input() public post: PostModel;
  @Output() public postSelected: EventEmitter<PostModel>;

  constructor() {
    this.postSelected = new EventEmitter<PostModel>();
  }

  public async onPostClicked(post: PostModel): Promise<void> {
    this.postSelected.emit(post);
  }
}
