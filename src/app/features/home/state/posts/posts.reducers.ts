import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { PostsEntity } from './posts.entity';
import { PostResponseModel } from '../../models/post/post-response.model';
import { PostsActions, PostsActionType } from './posts.actions';

export interface PostsState extends EntityState<PostResponseModel> {
  isFetching: boolean;
  trendingPosts: PostResponseModel[];
}

export const postsAdapter: EntityAdapter<PostResponseModel> = createEntityAdapter<PostResponseModel>();

export const initialState: PostsState = postsAdapter.getInitialState({ isFetching: false, trendingPosts: [] });

export function postsReducer(state: PostsState = initialState, action: PostsActions): PostsState {
  switch (action.type) {
    case PostsActionType.LoadDiscoverPosts: {
      return postsAdapter.setAll(PostsEntity.getDiscoverPosts(), { ...state, isFetching: true });
    }

    case PostsActionType.LoadEditorPicks: {
      return postsAdapter.setAll(PostsEntity.getEditorPicks(), { ...state, isFetching: true });
    }

    case PostsActionType.LoadFreshPosts: {
      return postsAdapter.setAll(PostsEntity.getFreshPosts(), { ...state, isFetching: true });
    }

    case PostsActionType.LoadMyFeeds: {
      return { ...state, isFetching: true };
    }

    case PostsActionType.MyFeedsLoaded: {
      return postsAdapter.setAll(action.payload, { ...state, isFetching: false });
    }

    case PostsActionType.LoadPostsForTag: {
      return postsAdapter.setAll(PostsEntity.getPostsForTag(action.payload), { ...state, isFetching: true });
    }

    case PostsActionType.LoadPopularPosts: {
      const trendingPosts = PostsEntity.getPopularPosts();
      return { ...state, trendingPosts: trendingPosts };
    }

    default: {
      return state;
    }
  }
}
