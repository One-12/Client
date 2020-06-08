import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, Output } from '@angular/core';
import { ChangeDetectionStrategy, EventEmitter } from '@angular/core';

import { TagModel } from '../../models/tag/tag.model';

@Component({
  selector: 'one12-tag-stream',
  templateUrl: './tag-stream.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagStreamComponent {
  @Input() public tags: TagModel[];
  @Output() public tagSelected: EventEmitter<TagModel>;

  public selectedTag: TagModel;

  constructor(@Inject(DOCUMENT) private readonly _document: Document) {
    this._initializeProperties();
  }

  public async scrollLeft(): Promise<void> {
    this._document.getElementById('tag-stream-container').scrollLeft -= 200;
  }

  public async scrollRight(): Promise<void> {
    this._document.getElementById('tag-stream-container').scrollLeft += 200;
  }

  public async onTagButtonClicked(tag: TagModel): Promise<void> {
    this.selectedTag = tag;
    await this.tagSelected.emit(tag);
  }

  private _initializeProperties(): void {
    this.tagSelected = new EventEmitter<TagModel>();
  }
}
