import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';

import { POST_PAGES } from '../utils/constants';

import { TagsFacade } from '../state/tags/tags.facade';
import { PostsFacade } from '../state/posts/posts.facade';
import { MenuItemsService } from '../services/menu-items.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { TagModel } from '../models/tag/tag.model';
import { NavItemModel } from '../models/nav/nav-item.model';
import { PostRequestModel } from '../models/post/post-request.model';
import { PostResponseModel } from '../models/post/post-response.model';

@UntilDestroy()
@Component({
  selector: 'one12-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public navItems: NavItemModel[];
  public selectedNavItem: NavItemModel;

  public posts$: Observable<PostResponseModel[]>;
  public isFetchingPosts$: Observable<boolean>;

  public trendingTags$: Observable<TagModel[]>;
  public isFetchingTrendingTags$: Observable<boolean>;

  public popularPosts$: Observable<PostResponseModel[]>;
  public isFetchingPopularPosts$: Observable<boolean>;

  public postsShadowedItems: number[];

  private postRequestModel: PostRequestModel;

  /**
   * Creates a new instance of Home Component.
   * @param router
   * @param tagsFacade
   * @param postsFacade
   * @param activatedRoute
   * @param angularFireAuth
   * @param menuItemsService
   */
  constructor(
    private readonly router: Router,
    private readonly tagsFacade: TagsFacade,
    private readonly postsFacade: PostsFacade,
    private readonly activatedRoute: ActivatedRoute,
    private readonly angularFireAuth: AngularFireAuth,
    private readonly menuItemsService: MenuItemsService,
  ) {
    this.postsShadowedItems = Array(20).fill(0);
    this.navItems = this.menuItemsService.getMenuItems();
    this.selectedNavItem = this.navItems[0];

    this.activatedRoute.queryParams.pipe(untilDestroyed(this)).subscribe(params => this.onQueryParamsChanged(params));
  }

  public async ngOnInit(): Promise<void> {
    this.posts$ = this.postsFacade.posts$;
    this.trendingTags$ = this.tagsFacade.trendingTags$;
    this.popularPosts$ = this.postsFacade.popularPosts$;

    this.isFetchingTrendingTags$ = this.tagsFacade.isFetchingTrendingTags$;
    this.isFetchingPosts$ = this.postsFacade.isFetchingPosts$;
    this.isFetchingPopularPosts$ = this.postsFacade.isFetchingPopularPosts$;

    await this.tagsFacade.loadTrendingTags();
    await this.postsFacade.loadPopularPosts({
      content: { page: POST_PAGES.Popular, offset: 1, limit: 20, tag: null },
      idToken: null,
    });
  }

  public async onTagSelected(selectedTag: TagModel): Promise<void> {
    await this.router.navigate([], {
      queryParams: { page: POST_PAGES.Tag, tag: selectedTag.name },
      relativeTo: this.activatedRoute,
    });
  }

  public async onPostSelected(selectedPost: PostResponseModel): Promise<void> {
    await this.router.navigate(['/post'], {
      queryParams: { id: selectedPost.id },
    });
  }

  /**
   * Loads Posts with subsequent Post Request.
   * @param {IInfiniteScrollEvent} infiniteScrollEvent
   * @returns {Promise<void>}
   * @memberof HomeComponent
   */
  public async onFeedsScrolled(infiniteScrollEvent: IInfiniteScrollEvent): Promise<void> {
    this.angularFireAuth.idToken.pipe(take(1)).subscribe(async (idToken: string) => {
      this.postRequestModel = { ...this.postRequestModel, offset: this.postRequestModel.offset + 1 };
      await this.postsFacade.loadPosts({ content: this.postRequestModel, idToken });
    });
  }

  /**
   * Loads Posts based on the Page Category.
   * @private
   * @param {Params} queryParams
   * @returns {Promise<void>}
   * @memberof HomeComponent
   */
  private async onQueryParamsChanged(queryParams: Params): Promise<void> {
    const { page, tag } = queryParams;

    if (page) {
      this.selectedNavItem = this.navItems.find(x => x.id === page);
      this.angularFireAuth.idToken.pipe(take(1)).subscribe(async (idToken: string) => {
        this.postRequestModel = { page, tag, limit: 20, offset: 1 };
        await this.postsFacade.loadPosts({ content: this.postRequestModel, idToken });
      });
    } else {
      await this.router.navigate(['/'], { queryParams: { page: POST_PAGES.Fresh }, replaceUrl: true });
    }
  }
}
