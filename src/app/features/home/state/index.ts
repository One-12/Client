import { ActionReducerMap } from '@ngrx/store';

import * as fromTags from './tags/tags.reducers';

export interface HomeModuleState {
  tags: fromTags.TagsState;
}

export const reducers: ActionReducerMap<HomeModuleState> = {
  tags: fromTags.tagsReducer,
};
