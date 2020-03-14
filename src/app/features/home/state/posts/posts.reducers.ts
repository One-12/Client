import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

import { PostsEntity } from "./posts.entity";
import { PostResponseModel } from "../../models/post/post-response.model";
import { PostsActions, PostsActionType } from "./posts.actions";

export interface PostsState extends EntityState<PostResponseModel> {
  isFetching: boolean;
  trendingPosts: PostResponseModel[];
}

export const postsAdapter: EntityAdapter<PostResponseModel> = createEntityAdapter<PostResponseModel>();

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
      return { ...state, isFetching: true };
    }

    case PostsActionType.MyFeedsLoaded: {
      return { ...state, isFetching: false };
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
