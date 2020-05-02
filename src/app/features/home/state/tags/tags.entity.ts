import { TagModel } from '../../models/tag/tag.model';

export class TagsEntity {
  public static getTrendingTags(): TagModel[] {
    let tags: TagModel[] = [];

    for (let i = 0; i < 10; i++) {
      const tag = { name: 'Hello', id: 'Hello' };
      tags = [...tags, tag];
    }

    return tags;
  }
}
