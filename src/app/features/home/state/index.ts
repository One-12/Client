import { ActionReducerMap } from '@ngrx/store';

import * as fromTags from './tags/tags.reducers';
import * as fromPosts from './posts/posts.reducers';

export interface HomeModuleState {
  tags: fromTags.TagsState;
  posts: fromPosts.PostsState;
}

export const reducers: ActionReducerMap<HomeModuleState> = {
  tags: fromTags.tagsReducer,
  posts: fromPosts.postsReducer
};
