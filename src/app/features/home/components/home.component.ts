import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';

import { HOME_PAGES } from '../utils/constants';

import { TagsFacade } from '../state/tags/tags.facade';
import { PostsFacade } from '../state/posts/posts.facade';
import { MenuItemsService } from '../services/menu-items.service';

import { TagModel } from '../models/tag/tag.model';
import { NavItemModel } from '../models/nav/nav-item.model';
import { PostRequestModel } from '../models/post/post-request.model';
import { PostResponseModel } from '../models/post/post-response.model';
import { CreatePostTypeSheetComponent } from './_bottom-sheet/create-post-type-sheet/create-post-type-sheet.component';

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

  constructor(
    private readonly _router: Router,
    private readonly _tagsFacade: TagsFacade,
    private readonly _postsFacade: PostsFacade,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _matBottomSheet: MatBottomSheet,
    private readonly _angularFireAuth: AngularFireAuth,
    private readonly _menuItemsService: MenuItemsService,
  ) {
    this.postsShadowedItems = Array(20).fill(0);
    this.navItems = this._menuItemsService.getHomePageMenuItems();
    this.selectedNavItem = this.navItems[0];

    this._activatedRoute.queryParams.pipe(untilDestroyed(this)).subscribe(params => this._onQueryParamsChanged(params));
  }

  public async ngOnInit(): Promise<void> {
    this.posts$ = this._postsFacade.posts$;
    this.trendingTags$ = this._tagsFacade.trendingTags$;
    this.popularPosts$ = this._postsFacade.popularPosts$;

    this.isFetchingPosts$ = this._postsFacade.isFetchingPosts$;
    this.isFetchingTrendingTags$ = this._tagsFacade.isFetchingTrendingTags$;
    this.isFetchingPopularPosts$ = this._postsFacade.isFetchingPopularPosts$;

    await this._tagsFacade.loadTrendingTags();
    await this._postsFacade.loadPopularPosts({
      content: { page: HOME_PAGES.Popular, offset: 1, limit: 20, tag: null },
      idToken: null,
    });
  }

  public async onTagSelected(selectedTag: TagModel): Promise<void> {
    await this._router.navigate([], {
      queryParams: { page: HOME_PAGES.Tag, tag: selectedTag.name },
      relativeTo: this._activatedRoute,
    });
  }

  public async onPostSelected(selectedPost: PostResponseModel): Promise<void> {
    await this._router.navigate(['/post'], {
      queryParams: { id: selectedPost.id },
    });
  }

  public async onFeedsScrolled(infiniteScrollEvent: IInfiniteScrollEvent): Promise<void> {
    this._angularFireAuth.idToken.pipe(take(1)).subscribe(async (idToken: string) => {
      console.log(idToken);
      this.postRequestModel = { ...this.postRequestModel, offset: this.postRequestModel.offset + 1 };
      await this._postsFacade.loadPosts({ content: this.postRequestModel, idToken });
    });
  }

  private async _onQueryParamsChanged(queryParams: Params): Promise<void> {
    const { page, tag } = queryParams;

    if (page) {
      if (page === HOME_PAGES.AddNewPost) {
        const createPostTypeSheetComponentRef = this._matBottomSheet.open(CreatePostTypeSheetComponent);
        createPostTypeSheetComponentRef.afterDismissed().subscribe(async () => {
          await this._router.navigate([], {
            queryParams: { page: null },
            relativeTo: this._activatedRoute,
            replaceUrl: true,
            queryParamsHandling: 'merge',
          });
        });
      } else if (page === HOME_PAGES.AddNewTemplate) {
        await this._router.navigate(['/creators-corner'], { replaceUrl: true, relativeTo: this._activatedRoute });
      } else {
        this.selectedNavItem = this.navItems.find(x => x.id === page);
        this._angularFireAuth.idToken.pipe(take(1)).subscribe(async (idToken: string) => {
          this.postRequestModel = { page, tag, limit: 20, offset: 1 };
          await this._postsFacade.loadPosts({ content: this.postRequestModel, idToken });
        });
      }
    } else {
      await this._router.navigate(['/'], { queryParams: { page: HOME_PAGES.Fresh }, replaceUrl: true });
    }
  }
}
