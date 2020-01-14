import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PostModel } from '../models/post/post.model';

@Component({
  selector: 'one12-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public tags: string[];
  public posts: PostModel[];

  constructor() {
    this.posts = [
      { title: 'Title 1', id: '1', content: 'https://pics.jilljuck.com/content/medium/041937content_d78972b3-97e4-40e7-80b8-98cd80d5b70c.jpg' },
      { title: 'Title 2', id: '2', content: 'https://pics.jilljuck.com/content/medium/085403content_3fd751f1-fa20-4291-8f05-3633644038dd.jpg' },
      { title: 'Title 3', id: '3', content: 'https://pics.jilljuck.com/content/medium/037646content_ac7728b5-7e65-44ae-b1fd-b9b75bc10de0.jpg' },
      { title: 'Title 4', id: '4', content: 'https://pics.jilljuck.com/content/medium/009466content_cddaee4d-cdeb-4d18-8667-77719f2b1dc9.jpg' },
      { title: 'Title 5', id: '5', content: 'https://pics.jilljuck.com/content/medium/016719content_7f7c9f06-a838-4748-886d-e117bc0b1357.jpg' },
      { title: 'Title 6', id: '6', content: 'https://pics.jilljuck.com/content/medium/034984content_f6dcb5ae-3511-41e7-982c-56e627de29f0.jpg' },
      { title: 'Title 7', id: '7', content: 'https://pics.jilljuck.com/content/medium/072146content_2088e9e6-b318-43e8-adff-035379ce34d6.jpg' },
      { title: 'Title 8', id: '8', content: 'https://pics.jilljuck.com/content/medium/018998content_0d10d83a-6f70-459f-95de-f925ca241d4b.jpg' },
      { title: 'Title 9', id: '9', content: 'https://pics.jilljuck.com/content/medium/083034content_1ffa8c79-cb43-48f0-a85a-27732e704a73.jpg' },
      { title: 'Title 10', id: '10', content: 'https://pics.jilljuck.com/content/medium/011716content_b9cc15ca-effc-4501-92b8-078bb0dcafaa.jpg' },
      { title: 'Title 11', id: '11', content: 'https://pics.jilljuck.com/content/medium/021645content_31007b68-b25d-4273-9d94-90159dd6b111.jpg' },
      { title: 'Title 12', id: '12', content: 'https://pics.jilljuck.com/content/medium/084019content_442a7e9b-0eb4-45fc-95c9-c62c5c49b103.jpg' },
      { title: 'Title 13', id: '13', content: 'https://pics.jilljuck.com/content/medium/061482content_803761ac-b1b7-414d-80b7-be4d212e5021.jpg' },
    ];

    this.tags = [
      'arun',
      'selva',
      'kumar',
      'arun',
      'selva',
      'kumar',
      'arun',
      'selva',
      'kumar',
      'arun',
      'selva',
      'kumar',
      'arun',
      'selva',
      'kumar',
    ];
  }

  ngOnInit() {}
}
