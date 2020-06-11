import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { TagModel } from '../../models/tag/tag.model';

@Component({
  selector: 'one12-tag-stream',
  templateUrl: './tag-stream.component.html',
  styleUrls: ['./tag-stream.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagStreamComponent {
  @Input() public tags: TagModel[];

  @Input() public isFetchingTrendingTags: boolean;

  @Output() public tagSelected: EventEmitter<TagModel>;

  public selectedTag: TagModel;

  public tagsShadowedItems: number[];

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.initializeProperties();
  }

  public async scrollLeft(): Promise<void> {
    this.document.getElementById('tag-stream-container').scrollLeft -= 200;
  }

  public async scrollRight(): Promise<void> {
    this.document.getElementById('tag-stream-container').scrollLeft += 200;
  }

  public async onTagButtonClicked(tag: TagModel): Promise<void> {
    this.selectedTag = tag;
    this.tagSelected.emit(tag);
  }

  private initializeProperties(): void {
    this.tagSelected = new EventEmitter<TagModel>();
    this.tagsShadowedItems = Array(20).fill(0);
  }
}
