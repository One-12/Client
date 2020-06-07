import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { PostsActions, PostsActionType } from './posts.actions';
import { PostResponseModel } from '../../models/post/post-response.model';

export interface PostsState extends EntityState<PostResponseModel> {
  isFetchingPosts: boolean;
  isFetchingPopularPosts: boolean;
  popularPosts: PostResponseModel[];
}

export const postsAdapter: EntityAdapter<PostResponseModel> = createEntityAdapter<PostResponseModel>();

export const initialState: PostsState = postsAdapter.getInitialState({
  isFetchingPosts: false,
  isFetchingPopularPosts: false,
  popularPosts: [],
});

export function postsReducer(state: PostsState = initialState, action: PostsActions): PostsState {
  switch (action.type) {
    case PostsActionType.LoadPosts: {
      return { ...state, isFetchingPosts: true };
    }

    case PostsActionType.LoadPopularPosts: {
      return { ...state, isFetchingPopularPosts: true };
    }

    case PostsActionType.PostsLoaded: {
      return postsAdapter.upsertMany(action.payload, {
        ...state,
        isFetchingPosts: false,
      });
    }

    case PostsActionType.PopularPostsLoaded: {
      return {
        ...state,
        popularPosts: [...state.popularPosts, ...action.payload],
        isFetchingPopularPosts: false,
      };
    }

    default: {
      return state;
    }
  }
}
