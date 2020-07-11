import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'one12-post-template-list',
  templateUrl: './post-template-list.component.html',
  styleUrls: ['./post-template-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostTemplateListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
