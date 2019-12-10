import { Action } from '@ngrx/store/src/models';

export enum TagsActionType {
  LoadTrendingTags      = '[Tags] Load Trending Tags',
  TrendingTagsLoaded    = '[Tags] Trending Tags Loaded',
}

export class LoadTrendingTags implements Action {
  public readonly type = TagsActionType.LoadTrendingTags;
}

export class TrendingTagsLoaded implements Action {
  public readonly type = TagsActionType.TrendingTagsLoaded;
}

export type TagsActions = LoadTrendingTags | TrendingTagsLoaded;
