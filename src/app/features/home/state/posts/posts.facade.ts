import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { PostsState } from './posts.reducers';
import { LoadMyFeeds, LoadEditorPicks, LoadFreshPosts } from './posts.actions';
import { LoadDiscoverPosts, LoadPostsForTag, LoadPopularPosts } from './posts.actions';
import { selectAllPosts, selectIsFetchingData, selectPopularPosts } from './posts.selectors';

@Injectable({ providedIn: 'root' })
export class PostsFacade {
  isFetching$       = this.store.select(selectIsFetchingData);
  popularPosts$     = this.store.select(selectPopularPosts);
  posts$            = this.store.select(selectAllPosts)
                                .pipe(map(data => Object.values(data)));

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

  async loadPopularPosts(): Promise<void> {
    await this.store.dispatch(new LoadPopularPosts());
  }
}
