import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { TagModel } from '../models/tag/tag.model';
import { PostResponseModel } from '../models/post/post-response.model';
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
  public posts$: Observable<PostResponseModel[]>;
  public isFetchingPosts$: Observable<boolean>;

  public trendingTags$: Observable<TagModel[]>;
  public isFetchingTags$: Observable<boolean>;

  public popularPosts$: Observable<PostResponseModel[]>;

  /**
   * @constructor
   * @param {PostsFacade} postsFacade
   * @param {TagsFacade} tagsFacade
   * @param {Router} router
   * @param {ActivatedRoute} activatedRoute
   */
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

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   */
  public async ngOnInit(): Promise<void> {
    this.posts$ = this.postsFacade.posts$;
    this.isFetchingPosts$ = this.postsFacade.isFetching$;

    this.trendingTags$ = this.tagsFacade.trendingTags$;
    this.isFetchingTags$ = this.tagsFacade.isFetching$;

    this.popularPosts$ = this.postsFacade.popularPosts$;

    await this.tagsFacade.loadTrendingTags();
    await this.postsFacade.loadPopularPosts();
  }

  /**
   * Event handler for Button Click Event for Navigation Buttons.
   * @param selectedMenu
   */
  public async onNavigationButtonClicked(selectedMenu: string): Promise<void> {
    await this.router.navigate(['/home'], {
      queryParams: { filter: selectedMenu },
    });
  }

  /**
   * Event handler for Button Click Event for Tag Buttons.
   * @param selectedTag
   */
  public async onTagSelected(selectedTag: TagModel): Promise<void> {
    await this.router.navigate(['/home'], {
      queryParams: { tag: selectedTag.name },
    });
  }

  /**
   * Event handler for Post Selection Event.ß
   * @param selectedPost
   */
  public async onPostSelected(selectedPost: PostResponseModel): Promise<void> {
    await this.router.navigate(['/post'], {
      queryParams: { id: selectedPost.id },
    });
  }

  /**
   * Query Changed Subscriber.
   * @param params
   * @private
   */
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
