import { Action } from '@ngrx/store/src/models';

export enum PostsActionType {
  LoadMyFeeds             = '[Posts] Load My Feeds',
  LoadEditorPicks         = '[Posts] Load Editor Picks',
  LoadDiscoverPosts       = '[Posts] Load Discover Posts',
  LoadFreshPosts          = '[Posts] Load Fresh Posts'
}

export class LoadMyFeeds implements Action {
  public readonly type = PostsActionType.LoadMyFeeds;
}

export class LoadEditorPicks implements Action {
  public readonly type = PostsActionType.LoadEditorPicks;
}

export class LoadDiscoverPosts implements Action {
  public readonly type = PostsActionType.LoadDiscoverPosts;
}

export class LoadFreshPosts implements Action {
  public readonly type = PostsActionType.LoadFreshPosts;
}

export type PostsActions = LoadMyFeeds | LoadEditorPicks | LoadDiscoverPosts | LoadFreshPosts;