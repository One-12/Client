import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { PostsState } from './posts.reducers';
import { selectAllPosts, selectIsFetchingData } from './posts.selectors';
import { LoadMyFeeds, LoadEditorPicks, LoadFreshPosts, LoadDiscoverPosts, LoadPostsForTag } from './posts.actions';

@Injectable({ providedIn: 'root' })
export class PostsFacade {
  posts$ = this.store
               .select(selectAllPosts)
               .pipe(map(data => Object.values(data)));

  isFetching$ = this.store.select(selectIsFetchingData);

  constructor(private readonly store: Store<PostsState>) {}

  async loadDiscoverPosts(): Promise<void> {
    await this.store.dispatch(new LoadDiscoverPosts());
  }

  async loadEditorPicks(): Promise<void> {
    await this.store.dispatch(new LoadEditorPicks());
  }

  async loadFreshPosts(): Promise<void> {
    await this.store.dispatch(new LoadFreshPosts());
  }

  async loadMyFeeds(): Promise<void> {
    await this.store.dispatch(new LoadMyFeeds());
  }

  async loadPostsForTag(tagName: string): Promise<void> {
    await this.store.dispatch(new LoadPostsForTag(tagName));
  }
}
