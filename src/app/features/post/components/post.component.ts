import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'one12-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  public tags: string[];
  constructor() {
    this.tags = [
      'Tag 1',
      'Tag 2',
      'Tag 3',
      'Tag 4',
      'Tag 5',
      'Tag 6',
      'Tag 7',
      'Tag 8',
    ];
  }
}
