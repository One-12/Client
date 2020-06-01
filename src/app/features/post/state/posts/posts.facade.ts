import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { Payload } from '../../../shared/models/payload.model';
import { AddPostRequestModel } from '../../models/post/add-post-request.model';

import { PostsState } from './posts.reducers';
import { CreatePost, UploadContent } from './posts.actions';
import { selectAllCreatedPosts, selectIsCreatingPost } from './posts.selectors';
import { selectIsUploadingContent, selectUploadedContentUrl } from './posts.selectors';

@Injectable({ providedIn: 'root' })
export class PostsFacade {
  public isCreatingPost$ = this.store.select(selectIsCreatingPost);

  public isUploadingContent$ = this.store.select(selectIsUploadingContent);

  public uploadedContentUrl$ = this.store.select(selectUploadedContentUrl);

  public createdPosts$ = this.store.select(selectAllCreatedPosts).pipe(map(data => Object.values(data)));

  constructor(private readonly store: Store<PostsState>) {}

  public async uploadContent(_payload: Payload<File>): Promise<void> {
    this.store.dispatch(new UploadContent(_payload));
  }

  public async createPost(_payload: Payload<AddPostRequestModel>): Promise<void> {
    this.store.dispatch(new CreatePost(_payload));
  }
}
