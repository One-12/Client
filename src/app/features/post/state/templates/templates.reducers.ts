import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { TemplatesActions, TemplatesActionType } from './templates.actions';
import { SearchTemplatesResponseModel } from '../../models/template/search-templates-response.model';

export interface TemplatesState extends EntityState<SearchTemplatesResponseModel> {
  isFetchingTemplates: boolean;
}

export const templatesAdapter: EntityAdapter<SearchTemplatesResponseModel> = createEntityAdapter<
  SearchTemplatesResponseModel
>();

export const initialState: TemplatesState = templatesAdapter.getInitialState({
  isFetchingTemplates: false,
});

export function templatesReducer(state: TemplatesState = initialState, action: TemplatesActions): TemplatesState {
  switch (action.type) {
    case TemplatesActionType.SearchTemplates: {
      return { ...state, isFetchingTemplates: true };
    }

    case TemplatesActionType.SearchTemplatesFailed: {
      return state;
    }

    case TemplatesActionType.TemplatesSearched: {
      return templatesAdapter.upsertMany(action.payload, {
        ...state,
        isFetchingTemplates: false,
      });
    }

    default: {
      return state;
    }
  }
}
