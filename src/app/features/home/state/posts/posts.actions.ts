import { Action } from '@ngrx/store';
import { PostResponseModel } from "../../models/post/post-response.model";

export enum PostsActionType {
  LoadMyFeeds           = '[Posts] Load My Feeds',
  MyFeedsLoaded         = '[Posts] My Feeds Loaded',
  LoadEditorPicks       = '[Posts] Load Editor Picks',
  EditorPicksLoaded     = '[Posts] Editor Picks Loaded',
  LoadDiscoverPosts     = '[Posts] Load Discover Posts',
  DiscoverPostsLoaded   = '[Posts] Discover Posts Loaded',
  LoadFreshPosts        = '[Posts] Load Fresh Posts',
  FreshPostsLoaded      = '[Posts] Fresh Posts Loaded',
  LoadPostsForTag       = '[Posts] Load Posts for Tag',
  PostsForTagLoaded     = '[Posts] Posts for Tag Loaded',
  LoadPopularPosts      = '[Posts] Load Popular Posts',
  PopularPostsLoaded    = '[Posts] Popular Posts Loaded',
  LoadPostFailed        = '[Posts] Posts Load Failed'
}

export class LoadMyFeeds implements Action {
  public readonly type = PostsActionType.LoadMyFeeds;

  constructor(public startIndex: number, public limit: number) {}
}

export class MyFeedsLoaded implements Action {
  public readonly type = PostsActionType.MyFeedsLoaded;

  constructor(public payload: PostResponseModel[]) {}
}

export class LoadEditorPicks implements Action {
  public readonly type = PostsActionType.LoadEditorPicks;
}

export class EditorPicksLoaded implements Action {
  public readonly type = PostsActionType.EditorPicksLoaded;
}

export class LoadDiscoverPosts implements Action {
  public readonly type = PostsActionType.LoadDiscoverPosts;
}

export class DiscoverPostsLoaded implements Action {
  public readonly type = PostsActionType.DiscoverPostsLoaded;
}

export class LoadFreshPosts implements Action {
  public readonly type = PostsActionType.LoadFreshPosts;
}

export class FreshPostsLoaded implements Action {
  public readonly type = PostsActionType.FreshPostsLoaded;
}

export class LoadPostsForTag implements Action {
  public readonly type = PostsActionType.LoadPostsForTag;

  constructor(public payload: string) {}
}

export class PostsForTagLoaded implements Action {
  public readonly type = PostsActionType.PostsForTagLoaded;
}

export class LoadPopularPosts implements Action {
  public readonly type = PostsActionType.LoadPopularPosts;
}

export class PopularPostsLoaded implements Action {
  public readonly type = PostsActionType.PopularPostsLoaded;
}

export class LoadPostsFailed implements Action {
  public readonly type = PostsActionType.LoadPostFailed;
}

export type PostsActions =
                          | LoadMyFeeds
                          | MyFeedsLoaded
                          | LoadEditorPicks
                          | EditorPicksLoaded
                          | LoadDiscoverPosts
                          | DiscoverPostsLoaded
                          | LoadFreshPosts
                          | FreshPostsLoaded
                          | LoadPostsForTag
                          | PostsForTagLoaded
                          | LoadPopularPosts
                          | PopularPostsLoaded
                          | LoadPostsFailed;
