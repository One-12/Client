import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { TagsEntity } from './tags.entity';
import { TagModel } from '../../models/tag/tag.model';
import { TagsActions, TagsActionType } from './tags.actions';

export interface TagsState extends EntityState<TagModel> {
  isFetching: boolean;
}

export const adapter: EntityAdapter<TagModel> = createEntityAdapter<TagModel>();

export const initialState: TagsState = adapter.getInitialState({ isFetching: false });

export function tagsReducer(state: TagsState = initialState, action: TagsActions): TagsState {
  switch (action.type) {
    case TagsActionType.LoadTrendingTags: {
      state.isFetching = true;
      return adapter.addAll(TagsEntity.getTrendingTags(), state);
    }

    case TagsActionType.TrendingTagsLoaded: {
      return { ...state, isFetching: false };
    }

    default: {
      return state;
    }
  }
}
