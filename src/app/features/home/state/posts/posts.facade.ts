import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { PostsState } from './posts.reducers';
import { LoadPopularPosts, LoadPosts } from './posts.actions';
import { selectAllPosts, selectPopularPosts } from './posts.selectors';

import { Payload } from '../../../shared/models/payload.model';
import { PostRequestModel } from '../../models/post/post-request.model';
import { selectIsFetchingPopularPosts, selectIsFetchingPosts } from './posts.selectors';

@Injectable({ providedIn: 'root' })
export class PostsFacade {
  public isFetchingPosts$ = this.store.select(selectIsFetchingPosts);

  public isFetchingPopularPosts = this.store.select(selectIsFetchingPopularPosts);

  public popularPosts$ = this.store.select(selectPopularPosts);

  public posts$ = this.store.select(selectAllPosts).pipe(map(data => Object.values(data)));

  constructor(private readonly store: Store<PostsState>) {}

  public async loadPosts(payload: Payload<PostRequestModel>): Promise<void> {
    this.store.dispatch(new LoadPosts(payload));
  }

  public async loadPopularPosts(payload: Payload<PostRequestModel>): Promise<void> {
    this.store.dispatch(new LoadPopularPosts(payload));
  }
}
