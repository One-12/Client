import { Action } from '@ngrx/store';

import { Payload } from '../../../shared/models/payload.model';
import { SearchTemplatesRequestModel } from '../../models/template/search-templates-request.model';
import { SearchTemplatesResponseModel } from '../../models/template/search-templates-response.model';

export enum TemplatesActionType {
  SearchTemplates = '[Templates] Search Templates',
  TemplatesSearched = '[Templates] Templates Searched',
  SearchTemplatesFailed = '[Templates] Search Templates Failed',
}

export class SearchTemplates implements Action {
  public readonly type: TemplatesActionType.SearchTemplates;

  constructor(public payload: Payload<SearchTemplatesRequestModel>) {}
}

export class TemplatesSearched implements Action {
  public readonly type: TemplatesActionType.TemplatesSearched;

  constructor(public payload: SearchTemplatesResponseModel[]) {}
}

export class SearchTemplatesFailed implements Action {
  public readonly type: TemplatesActionType.SearchTemplatesFailed;
}

export type TemplatesActions = SearchTemplates | TemplatesSearched | SearchTemplatesFailed;
