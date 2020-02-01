import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { TagsState } from './tags.reducers';
import { LoadTrendingTags } from './tags.actions';
import { selectAllTags, selectIsFetchingData } from './tags.selectors';

@Injectable({ providedIn: 'root' })
export class TagsFacade {
  trendingTags$ = this.store
                      .select(selectAllTags)
                      .pipe(map(data => Object.values(data)));

  isFetching$ = this.store.select(selectIsFetchingData);

  constructor(private readonly store: Store<TagsState>) {}

  async loadTrendingTags(): Promise<void> {
    this.store.dispatch(new LoadTrendingTags());
  }
}
