import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { NAVIGATION_MENU_ITEMS } from '../utils/constants';

import { TagModel } from '../models/tag/tag.model';
import { PostResponseModel } from '../models/post/post-response.model';
import { TagsFacade } from '../state/tags/tags.facade';
import { PostsFacade } from '../state/posts/posts.facade';

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
   * @param {PostsFacade} _postsFacade
   * @param {TagsFacade} _tagsFacade
   * @param {Router} _router
   * @param {ActivatedRoute} _activatedRoute
   */
  constructor(
    private readonly _postsFacade: PostsFacade,
    private readonly _tagsFacade: TagsFacade,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.queryParams.subscribe(params =>
      this._onQueryParamsChanged(params),
    );
  }

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   */
  public async ngOnInit(): Promise<void> {
    this.posts$ = this._postsFacade.posts$;
    this.isFetchingPosts$ = this._postsFacade.isFetching$;

    this.trendingTags$ = this._tagsFacade.trendingTags$;
    this.isFetchingTags$ = this._tagsFacade.isFetching$;

    this.popularPosts$ = this._postsFacade.popularPosts$;

    await this._tagsFacade.loadTrendingTags();
    await this._postsFacade.loadPopularPosts();
  }

  /**
   * Event handler for Button Click Event for Navigation Buttons.
   * @param selectedMenu
   */
  public async onNavigationButtonClicked(selectedMenu: string): Promise<void> {
    await this._router.navigate(['/home'], {
      queryParams: { filter: selectedMenu },
    });
  }

  /**
   * Event handler for Button Click Event for Tag Buttons.
   * @param selectedTag
   */
  public async onTagSelected(selectedTag: TagModel): Promise<void> {
    await this._router.navigate(['/home'], {
      queryParams: { tag: selectedTag.name },
    });
  }

  /**
   * Event handler for Post Selection Event.ß
   * @param selectedPost
   */
  public async onPostSelected(selectedPost: PostResponseModel): Promise<void> {
    await this._router.navigate(['/post'], {
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
      await this._postsFacade.loadPostsForTag(tag);
      return;
    }

    switch (filter) {
      case NAVIGATION_MENU_ITEMS.Discover: {
        await this._postsFacade.loadDiscoverPosts();
        break;
      }

      case NAVIGATION_MENU_ITEMS.Fresh: {
        await this._postsFacade.loadFreshPosts();
        break;
      }

      case NAVIGATION_MENU_ITEMS.EditorPicks: {
        await this._postsFacade.loadEditorPicks();
        break;
      }

      case NAVIGATION_MENU_ITEMS.MyFeeds: {
        await this._postsFacade.loadMyFeeds(0, 20);
        break;
      }

      default: {
        await this._postsFacade.loadMyFeeds(0, 20);
        break;
      }
    }
  }
}
