import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Observable } from 'rxjs';
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
import { take } from 'rxjs/operators';

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
  public isFetchingTags$: Observable<boolean>;

  public popularPosts$: Observable<PostResponseModel[]>;

  private _postRequestModel: PostRequestModel;

  constructor(
    private readonly _router: Router,
    private readonly _tagsFacade: TagsFacade,
    private readonly _postsFacade: PostsFacade,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _angularFireAuth: AngularFireAuth,
    private readonly _menuItemsService: MenuItemsService,
  ) {
    this.navItems = this._menuItemsService.getMenuItems();
    this.selectedNavItem = this.navItems[0];

    this._activatedRoute.queryParams.pipe(untilDestroyed(this)).subscribe(params => this._onQueryParamsChanged(params));
  }

  public async ngOnInit(): Promise<void> {
    this.posts$ = this._postsFacade.posts$;
    this.trendingTags$ = this._tagsFacade.trendingTags$;
    this.popularPosts$ = this._postsFacade.popularPosts$;

    this.isFetchingTags$ = this._tagsFacade.isFetching$;
    this.isFetchingPosts$ = this._postsFacade.isFetchingPosts$;

    await this._tagsFacade.loadTrendingTags();
    await this._postsFacade.loadPopularPosts({
      payload: { page: POST_PAGES.Popular, offset: 1, limit: 20, tag: null },
      idToken: null,
    });
  }

  public async onTagSelected(selectedTag: TagModel): Promise<void> {
    await this._router.navigate([], {
      queryParams: { page: POST_PAGES.Tag, tag: selectedTag.name },
      relativeTo: this._activatedRoute,
    });
  }

  public async onPostSelected(selectedPost: PostResponseModel): Promise<void> {
    await this._router.navigate(['/post'], {
      queryParams: { id: selectedPost.id },
    });
  }

  public async onFeedsScrolled($event: IInfiniteScrollEvent): Promise<void> {
    this._angularFireAuth.idToken.pipe(take(1)).subscribe(async (idToken: string) => {
      this._postRequestModel = { ...this._postRequestModel, offset: this._postRequestModel.offset + 1 };
      await this._postsFacade.loadPosts({ payload: this._postRequestModel, idToken });
    });
  }

  private async _onQueryParamsChanged(queryParams: Params): Promise<void> {
    const { page, tag } = queryParams;

    if (page) {
      this.selectedNavItem = this.navItems.find(x => x.id === page);
      this._angularFireAuth.idToken.pipe(take(1)).subscribe(async (idToken: string) => {
        this._postRequestModel = { page, tag, limit: 20, offset: 1 };
        await this._postsFacade.loadPosts({ payload: this._postRequestModel, idToken });
      });
    }
  }
}
