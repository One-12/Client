import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'one12-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
