import { Component, Input, Output } from '@angular/core';
import { ChangeDetectionStrategy, EventEmitter } from '@angular/core';

import { PostResponseModel } from '../../models/post/post-response.model';

@Component({
  selector: 'one12-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedCardComponent {
  @Input() public post: PostResponseModel;
  @Output() public postSelected: EventEmitter<PostResponseModel>;

  constructor() {
    this.postSelected = new EventEmitter<PostResponseModel>();
  }

  public async onPostClicked(post: PostResponseModel): Promise<void> {
    this.postSelected.emit(post);
  }
}
