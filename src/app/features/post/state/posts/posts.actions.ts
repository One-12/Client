import { Action } from '@ngrx/store';
import { Payload } from '../../../shared/models/payload.model';
import { AddPostRequestModel } from '../../models/post/add-post-request.model';
import { PostResponseModel } from '../../models/post/post-response.model';

export enum PostsActionType {
  UploadContent = '[Posts] Upload Content',
  ContentUploaded = '[Posts] Content Upload',
  ContentUploadFailed = '[Posts] Content Upload Failed',
  CreatePost = '[Posts] Upload Post',
  PostCreated = '[Posts] Post Created',
}

export class UploadContent implements Action {
  public readonly type = PostsActionType.UploadContent;

  constructor(public payload: Payload<File>) {}
}

export class ContentUploaded implements Action {
  public readonly type = PostsActionType.ContentUploaded;

  constructor(public payload: string) {}
}

export class ContentUploadFailed implements Action {
  public readonly type = PostsActionType.ContentUploadFailed;
}

export class CreatePost implements Action {
  public readonly type = PostsActionType.CreatePost;

  constructor(public payload: Payload<AddPostRequestModel>) {}
}

export class PostCreated implements Action {
  public readonly type = PostsActionType.PostCreated;

  constructor(public payload: PostResponseModel) {}
}

export type PostsActions = UploadContent | ContentUploaded | ContentUploadFailed | CreatePost | PostCreated;
