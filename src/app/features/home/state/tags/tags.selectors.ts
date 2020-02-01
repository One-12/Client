import { createFeatureSelector, createSelector } from '@ngrx/store';

import { HomeModuleState } from '../index';
import { TagsState, tagsAdapter } from './tags.reducers';

export const selectHomeState = createFeatureSelector<HomeModuleState>('home');

export const selectTagsState = createSelector(selectHomeState, state => state.tags);

const { selectEntities } = tagsAdapter.getSelectors(selectTagsState);

export const selectAllTags = selectEntities;

export const selectIsFetchingData = createSelector(selectTagsState, (state: TagsState) => state.isFetching);
