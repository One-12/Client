import * as faker from 'faker';

import { TagModel } from '../../models/tag/tag.model';

export class TagsEntity {
  public static getTrendingTags(): TagModel[] {
      let tags: TagModel[] = [];

      for (let i = 0; i < 10; i++) {
          const tag = { name: faker.name.firstName(), id: faker.lorem.slug(8)};
          tags = [...tags, tag];
      }

      return tags;
  }
}
