import { HomeModuleState } from '../index';
import { PostsState, postsAdapter } from './posts.reducers';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectHomeState = createFeatureSelector<HomeModuleState>('home');

export const selectPostsState = createSelector(selectHomeState, state => state.posts);

const { selectEntities } = postsAdapter.getSelectors(selectPostsState);

export const selectAllPosts = selectEntities;

export const selectIsFetchingPosts = createSelector(selectPostsState, (state: PostsState) => state.isFetchingPosts);

export const selectIsFetchingPopularPosts = createSelector(
  selectPostsState,
  (state: PostsState) => state.isFetchingPopularPosts,
);

export const selectPopularPosts = createSelector(selectPostsState, (state: PostsState) => state.popularPosts);
