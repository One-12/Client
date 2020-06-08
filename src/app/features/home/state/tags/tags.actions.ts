import { Action } from '@ngrx/store/src/models';
import { GetTrendingTagResponseModel } from '../../models/tag/get-trending-tag-response.model';

export enum TagsActionType {
  LoadTrendingTags = '[Tags] Load Trending Tags',
  TrendingTagsLoaded = '[Tags] Trending Tags Loaded',
}

export class LoadTrendingTags implements Action {
  public readonly type = TagsActionType.LoadTrendingTags;
}

export class TrendingTagsLoaded implements Action {
  public readonly type = TagsActionType.TrendingTagsLoaded;

  constructor(public payload: GetTrendingTagResponseModel[]) {}
}

export type TagsActions = LoadTrendingTags | TrendingTagsLoaded;
