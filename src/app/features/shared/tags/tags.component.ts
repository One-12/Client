import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'one12-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsComponent {
  @Input() tags: string[];
}
