import { ActionReducerMap } from '@ngrx/store';
import * as fromPosts from './posts/posts.reducers';

export interface PostsModuleState {
  posts: fromPosts.PostsState;
}

export const reducers: ActionReducerMap<PostsModuleState> = {
  posts: fromPosts.postsReducer,
};
