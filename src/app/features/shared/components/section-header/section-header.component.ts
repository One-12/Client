import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'one12-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
  @Input() public title         : string;
  @Input() public subtitle      : string;
}
