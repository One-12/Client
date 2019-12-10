import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'one12-tag-stream',
  templateUrl: './tag-stream.component.html',
  styleUrls: ['./tag-stream.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagStreamComponent {
  @Input() public tags              : string[];
  @Output() public tagSelected      : EventEmitter<string>;

  public selectedTag: string;

  constructor() {
    this._initializeProperties();
  }

  public async onTagButtonClicked(tag: string): Promise<void> {
    this.selectedTag = tag;
    await this.tagSelected.emit(tag);
  }

  private _initializeProperties(): void {
    this.tagSelected = new EventEmitter<string>();
  }
}
