import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'one12-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
  @Input() public title: string;

  @Input() public subtitle: string;

  @Input() public isLightMode: boolean;

  @Input() public showScrollButton: boolean;

  @Output() public scrollLeftButtonClicked = new EventEmitter();

  @Output() public scrollRightButtonClicked = new EventEmitter();

  constructor() {
    this._initializeProperties();
  }

  public async onScrollLeftButtonClicked(): Promise<void> {
    await this.scrollLeftButtonClicked.emit();
  }

  public async onScrollRightButtonClicked(): Promise<void> {
    await this.scrollRightButtonClicked.emit();
  }

  private _initializeProperties() {
    this.isLightMode = false;
    this.showScrollButton = false;
  }
}
