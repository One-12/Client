import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { TagModel } from '../../models/tag/tag.model';
import { TagsActions, TagsActionType } from './tags.actions';

export interface TagsState extends EntityState<TagModel> {
  isFetchingTrendingTags: boolean;
}

export const tagsAdapter: EntityAdapter<TagModel> = createEntityAdapter<TagModel>();

export const initialState: TagsState = tagsAdapter.getInitialState({ isFetchingTrendingTags: false });

export function tagsReducer(state: TagsState = initialState, action: TagsActions): TagsState {
  switch (action.type) {
    case TagsActionType.LoadTrendingTags: {
      return { ...state, isFetchingTrendingTags: true };
    }

    case TagsActionType.TrendingTagsLoaded: {
      return tagsAdapter.setAll(action.payload, { ...state, isFetchingTrendingTags: false });
    }

    default: {
      return state;
    }
  }
}
