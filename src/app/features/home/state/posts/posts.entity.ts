import * as faker from 'faker';
import {PostModel} from '../../models/post/post.model';

export class PostsEntity {
  public static getMyFeeds(): PostModel[] {
    const posts: PostModel[] = [];
    for (let i = 0; i < 50; i++) {
      const post = this._getPostDetails();
      posts.push(post);
    }

    return posts;
  }

  public static getEditorPicks(): PostModel[] {
    const posts: PostModel[] = [];
    for (let i = 0; i < 50; i++) {
      const post = this._getPostDetails();
      posts.push(post);
    }

    return posts;
  }

  public static getDiscoverPosts(): PostModel[] {
    const posts: PostModel[] = [];
    for (let i = 0; i < 50; i++) {
      const post = this._getPostDetails();
      posts.push(post);
    }

    return posts;
  }

  public static getFreshPosts(): PostModel[] {
    const posts: PostModel[] = [];
    for (let i = 0; i < 50; i++) {
      const post = this._getPostDetails();
      posts.push(post);
    }

    return posts;
  }

  private static _getPostDetails(): PostModel {
    return {
      id: faker.lorem.word(),
      content: faker.internet.avatar(),
      title: faker.lorem.words(5),
      commentsCount: Math.random(),
      likesCount: Math.random(),
      points: Math.random(),
      postedBy: {
        firstName: faker.internet.userName(),
        id: faker.lorem.word(),
        lastName: faker.internet.userName(),
        middleName: faker.internet.userName(),
        userName: faker.internet.userName(),
      },
      postedOn: faker.date.past(),
      tags: [
        {
          id: faker.lorem.word(),
          name: faker.lorem.word(),
        },
      ],
      type: faker.internet.domainName(),
      views: Math.random(),
    };
  }
}
