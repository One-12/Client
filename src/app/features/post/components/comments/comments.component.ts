import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'one12-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
