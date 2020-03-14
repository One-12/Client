import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';

import { of } from 'rxjs';

import { PostService } from '../../services/post.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoadMyFeeds, PostsActionType } from './posts.actions';

@Injectable({ providedIn: 'root' })
export class PostsEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _postService: PostService,
  ) {}

  @Effect()
  loadMyFeedsPosts$ = this._actions$.pipe(
    ofType(PostsActionType.LoadMyFeeds),
    switchMap((action: LoadMyFeeds) =>
      this._postService
          .getPostsForFeed(action.startIndex, action.pageSize)
          .pipe(
            map(posts => {
              return { type: PostsActionType.MyFeedsLoaded, payload: posts };
            }),
            catchError((err: HttpErrorResponse) => {
              return of({ type: PostsActionType.LoadPostFailed, payload: null });
            }),
          ),
      ));
}
