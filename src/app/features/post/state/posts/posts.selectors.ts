import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PostsModuleState } from '../index';
import { postsAdapter, PostsState } from './posts.reducers';

export const selectPostsFeatureState = createFeatureSelector<PostsModuleState>('posts');

export const selectPostsState = createSelector(selectPostsFeatureState, state => state.posts);

const { selectEntities } = postsAdapter.getSelectors(selectPostsState);

export const selectAllCreatedPosts = selectEntities;

export const selectIsUploadingContent = createSelector(
  selectPostsState,
  (state: PostsState) => state.isUploadingContent,
);

export const selectIsCreatingPost = createSelector(selectPostsState, (state: PostsState) => state.isCreatingPost);

export const selectUploadedContentUrl = createSelector(
  selectPostsState,
  (state: PostsState) => state.uploadedContentUrl,
);
