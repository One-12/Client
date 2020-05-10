import { Action } from '@ngrx/store';

import { Payload } from '../../../shared/models/payload.model';
import { PostRequestModel } from '../../models/post/post-request.model';
import { PostResponseModel } from '../../models/post/post-response.model';

export enum PostsActionType {
  LoadPosts = '[Posts] Load Posts',
  PostsLoaded = '[Posts] Posts Loaded',
  LoadPostsFailed = '[Posts] Posts Load Failed',
  LoadPopularPosts = '[Posts] Load Popular Posts',
  PopularPostsLoaded = '[Posts] Popular Posts Loaded',
  LoadPopularPostsFailed = '[Posts] Popular Posts Load Failed',
}

export class LoadPosts implements Action {
  public readonly type = PostsActionType.LoadPosts;

  constructor(public payload: Payload<PostRequestModel>) {}
}

export class PostLoaded implements Action {
  public readonly type = PostsActionType.PostsLoaded;

  constructor(public payload: PostResponseModel[]) {}
}

export class LoadPostsFailed implements Action {
  public readonly type = PostsActionType.LoadPostsFailed;
}

export class LoadPopularPosts implements Action {
  public readonly type = PostsActionType.LoadPopularPosts;

  constructor(public payload: Payload<PostRequestModel>) {}
}

export class PopularPostsLoaded implements Action {
  public readonly type = PostsActionType.PopularPostsLoaded;

  constructor(public payload: PostResponseModel[]) {}
}

export class LoadPopularPostsFailed implements Action {
  public readonly type = PostsActionType.LoadPopularPostsFailed;
}

export type PostsActions =
  | LoadPosts
  | PostLoaded
  | LoadPostsFailed
  | LoadPopularPosts
  | PopularPostsLoaded
  | LoadPopularPostsFailed;
