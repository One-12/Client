import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { PostsEntity } from './posts.entity';
import { PostModel } from '../../models/post/post.model';
import { PostsActions, PostsActionType } from './posts.actions';

export interface PostsState extends EntityState<PostModel> {
  isFetching: boolean;
  trendingPosts: PostModel[];
}

export const postsAdapter: EntityAdapter<PostModel> = createEntityAdapter<PostModel>();

export const initialState: PostsState = postsAdapter.getInitialState({ isFetching: false, trendingPosts: [] });

export function postsReducer(state: PostsState = initialState, action: PostsActions): PostsState {
  switch (action.type) {
    case PostsActionType.LoadDiscoverPosts: {
      state.isFetching = true;
      return postsAdapter.addAll(PostsEntity.getDiscoverPosts(), state);
    }

    case PostsActionType.LoadEditorPicks: {
      state.isFetching = true;
      return postsAdapter.addAll(PostsEntity.getEditorPicks(), state);
    }

    case PostsActionType.LoadFreshPosts: {
      state.isFetching = true;
      return postsAdapter.addAll(PostsEntity.getFreshPosts(), state);
    }

    case PostsActionType.LoadMyFeeds: {
      state.isFetching = true;
      return postsAdapter.addAll(PostsEntity.getMyFeeds(), state);
    }

    case PostsActionType.LoadPostsForTag: {
      state.isFetching = true;
      return postsAdapter.addAll(PostsEntity.getPostsForTag(action.payload), state);
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
