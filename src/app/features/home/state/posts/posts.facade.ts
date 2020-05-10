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
  isFetchingPosts$ = this.store.select(selectIsFetchingPosts);

  isFetchingPopularPosts = this.store.select(selectIsFetchingPopularPosts);

  popularPosts$ = this.store.select(selectPopularPosts);

  posts$ = this.store.select(selectAllPosts).pipe(map(data => Object.values(data)));

  constructor(private readonly store: Store<PostsState>) {}

  public async loadPosts(_payload: Payload<PostRequestModel>): Promise<void> {
    this.store.dispatch(new LoadPosts(_payload));
  }

  public async loadPopularPosts(_payload: Payload<PostRequestModel>): Promise<void> {
    this.store.dispatch(new LoadPopularPosts(_payload));
  }
}
