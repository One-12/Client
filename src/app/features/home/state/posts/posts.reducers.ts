import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { PostModel } from '../../models/post/post.model';
import { PostsActions } from './posts.actions';

export interface PostsState extends EntityState<PostModel> {
  isFetching: boolean;
}

export const adapter: EntityAdapter<PostModel> = createEntityAdapter<PostModel>();

export const initialState: PostsState = adapter.getInitialState({ isFetching: false });

export function postsReducer(state: PostsState = initialState, action: PostsActions): PostsState {
  switch(action.type) {
    return null;
  }
}