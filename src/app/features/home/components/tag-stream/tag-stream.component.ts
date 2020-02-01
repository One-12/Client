import { Component, Input, Output } from '@angular/core';
import { ChangeDetectionStrategy, EventEmitter } from '@angular/core';

import { TagModel } from '../../models/tag/tag.model';

@Component({
  selector: 'one12-tag-stream',
  templateUrl: './tag-stream.component.html',
  styleUrls: ['./tag-stream.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagStreamComponent {
  @Input() public tags: TagModel[];
  @Output() public tagSelected: EventEmitter<TagModel>;

  public selectedTag: TagModel;

  constructor() {
    this._initializeProperties();
  }

  public async onTagButtonClicked(tag: TagModel): Promise<void> {
    this.selectedTag = tag;
    await this.tagSelected.emit(tag);
  }

  private _initializeProperties(): void {
    this.tagSelected = new EventEmitter<TagModel>();
  }
}
