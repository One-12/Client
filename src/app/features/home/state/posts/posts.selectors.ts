import { HomeModuleState } from '../index';
import { PostsState, postsAdapter } from './posts.reducers';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectHomeState = createFeatureSelector<HomeModuleState>('home');

export const selectPostsState = createSelector(selectHomeState, state => state.posts);

const { selectEntities } = postsAdapter.getSelectors(selectPostsState);

export const selectAllPosts = selectEntities;

export const selectIsFetchingData = createSelector(selectPostsState, (state: PostsState) => state.isFetching);

export const selectPopularPosts = createSelector(selectPostsState, (state: PostsState) => state.trendingPosts);
