import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'one12-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedCardComponent {
  @Input() public title     : string;
  @Input() public content   : string;
}
