import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { TagModel } from '../models/tag/tag.model';
import { PostModel } from '../models/post/post.model';
import { TagsFacade } from '../state/tags/tags.facade';
import { PostsFacade } from '../state/posts/posts.facade';

import { NAVIGATION_MENU_ITEMS } from '../utils/constants';

@Component({
  selector: 'one12-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public posts$: Observable<PostModel[]>;
  public isFetchingPosts$: Observable<boolean>;

  public trendingTags$: Observable<TagModel[]>;
  public isFetchingTags$: Observable<boolean>;

  private popularPosts$: Observable<PostModel[]>;

  constructor(
    private readonly postsFacade: PostsFacade,
    private readonly tagsFacade: TagsFacade,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params =>
      this._onQueryParamsChanged(params),
    );
  }

  public async ngOnInit(): Promise<void> {
    this.posts$ = this.postsFacade.posts$;
    this.isFetchingPosts$ = this.postsFacade.isFetching$;

    this.trendingTags$ = this.tagsFacade.trendingTags$;
    this.isFetchingTags$ = this.tagsFacade.isFetching$;

    this.popularPosts$ = this.postsFacade.popularPosts$;

    await this.tagsFacade.loadTrendingTags();
    await this.postsFacade.loadPopularPosts();
  }

  public async onNavigationButtonClicked(selectedMenu: string): Promise<void> {
    await this.router.navigate(['/home'], {
      queryParams: { filter: selectedMenu },
    });
  }

  public async onTagSelected(selectedTag: TagModel): Promise<void> {
    await this.router.navigate(['/home'], {
      queryParams: { tag: selectedTag.name },
    });
  }

  public async onPostSelected(selectedPost: PostModel): Promise<void> {
    await this.router.navigate(['/post'], {
      queryParams: { id: selectedPost.id },
    });
  }

  private async _onQueryParamsChanged(params): Promise<void> {
    const { filter, tag } = params;

    if (tag) {
      await this.postsFacade.loadPostsForTag(tag);
      return;
    }

    switch (filter) {
      case NAVIGATION_MENU_ITEMS.Discover: {
        await this.postsFacade.loadDiscoverPosts();
        break;
      }

      case NAVIGATION_MENU_ITEMS.Fresh: {
        await this.postsFacade.loadFreshPosts();
        break;
      }

      case NAVIGATION_MENU_ITEMS.EditorPicks: {
        await this.postsFacade.loadEditorPicks();
        break;
      }

      case NAVIGATION_MENU_ITEMS.MyFeeds: {
        await this.postsFacade.loadMyFeeds();
        break;
      }

      default: {
        await this.postsFacade.loadMyFeeds();
        break;
      }
    }
  }
}
