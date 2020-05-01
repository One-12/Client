import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';

import { of } from 'rxjs';

import { PostService } from '../../services/post.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoadPopularPosts, LoadPosts, PostsActionType } from './posts.actions';

@Injectable({ providedIn: 'root' })
export class PostsEffects {
  constructor(private readonly _actions$: Actions, private readonly _postService: PostService) {}

  @Effect()
  loadPosts$ = this._actions$.pipe(
    ofType(PostsActionType.LoadPosts),
    switchMap((action: LoadPosts) =>
      this._postService.getPosts(action.payload).pipe(
        map(posts => {
          return { type: PostsActionType.PostsLoaded, payload: posts };
        }),
        catchError((err: HttpErrorResponse) => {
          return of({ type: PostsActionType.LoadPostsFailed, payload: null });
        }),
      ),
    ),
  );

  @Effect()
  loadPopularPosts$ = this._actions$.pipe(
    ofType(PostsActionType.LoadPopularPosts),
    switchMap((action: LoadPopularPosts) =>
      this._postService.getPosts(action.payload).pipe(
        map(posts => {
          return { type: PostsActionType.PopularPostsLoaded, payload: posts };
        }),
        catchError((err: HttpErrorResponse) => {
          return of({ type: PostsActionType.LoadPopularPostsFailed, payload: null });
        }),
      ),
    ),
  );
}
