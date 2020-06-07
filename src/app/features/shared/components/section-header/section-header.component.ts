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
  @Input() public showScrollButton: boolean;

  @Output() public scrollLeftButtonClicked = new EventEmitter();
  @Output() public scrollRightButtonClicked = new EventEmitter();

  public async onScrollLeftButtonClicked(): Promise<void> {
    await this.scrollLeftButtonClicked.emit();
  }

  public async onScrollRightButtonClicked(): Promise<void> {
    await this.scrollRightButtonClicked.emit();
  }
}
