import { CommentModel } from '../../models/comment/comment.model';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'one12-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent {
  @Input() public comments: CommentModel[];

  constructor() {
    this.comments = [
      {
        id: '1',
        comment: 'Comment 1',
        postedBy: {
          id: '1',
          name: 'Arun Selva Kumar',
          profilePic: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Virat_Kohli_portrait.jpg',
        },
        postedOn: 'Few Days Ago',
        replies: [],
      },
      {
        id: '2',
        comment: 'Comment 2',
        postedBy: {
          id: '2',
          name: 'Prakash Selvaraj',
          profilePic: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Virat_Kohli_portrait.jpg',
        },
        postedOn: 'Few Minutes Ago',
        replies: [],
      },
      {
        id: '3',
        comment: 'Comment 3',
        postedBy: {
          id: '3',
          name: 'Arun',
          profilePic: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Virat_Kohli_portrait.jpg',
        },
        postedOn: 'Few Minutes Ago',
        replies: [],
      },
      {
        id: '4',
        comment: 'Comment 4',
        postedBy: {
          id: '4',
          name: 'Prakash',
          profilePic: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Virat_Kohli_portrait.jpg',
        },
        postedOn: 'Few Minutes Ago',
        replies: [],
      },
      {
        id: '5',
        comment: 'Comment 5',
        postedBy: {
          id: '5',
          name: 'Selva Kumar',
          profilePic: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Virat_Kohli_portrait.jpg',
        },
        postedOn: 'Few Minutes Ago',
        replies: [],
      },
    ];
  }
}
