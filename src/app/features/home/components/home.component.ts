import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';

import { POST_PAGES } from '../utils/constants';

import { TagsFacade } from '../state/tags/tags.facade';
import { PostsFacade } from '../state/posts/posts.facade';

import { TagModel } from '../models/tag/tag.model';
import { PostRequestModel } from '../models/post/post-request.model';
import { PostResponseModel } from '../models/post/post-response.model';

@Component({
  selector: 'one12-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
  ) {
    this._activatedRoute.queryParams.subscribe(params => this._onQueryParamsChanged(params));
  }

  public async ngOnInit(): Promise<void> {
    this.posts$ = this._postsFacade.posts$;
    this.isFetchingPosts$ = this._postsFacade.isFetchingPosts$;

    this.trendingTags$ = this._tagsFacade.trendingTags$;
    this.isFetchingTags$ = this._tagsFacade.isFetching$;

    this.popularPosts$ = this._postsFacade.popularPosts$;

    await this._tagsFacade.loadTrendingTags();
    await this._postsFacade.loadPopularPosts({ page: POST_PAGES.Popular, offset: 1, limit: 20, tag: null });
  }

  public async onNavigationButtonClicked(selectedMenu: string): Promise<void> {
    await this._router.navigate([], {
      queryParams: { page: selectedMenu },
      relativeTo: this._activatedRoute,
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
    this._postRequestModel = { ...this._postRequestModel, offset: this._postRequestModel.offset + 1 };
    await this._postsFacade.loadPosts(this._postRequestModel);
  }

  private async _onQueryParamsChanged(queryParams: Params): Promise<void> {
    const { page, tag } = queryParams;

    if (page) {
      this._postRequestModel = { page, tag, limit: 20, offset: 1 };
      await this._postsFacade.loadPosts(this._postRequestModel);
    }
  }
}
