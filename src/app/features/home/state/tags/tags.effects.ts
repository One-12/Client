import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { TagsService } from '../../services/tags.service';
import { LoadTrendingTags, TagsActionType } from './tags.actions';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TagsEffects {
  constructor(private readonly _actions$: Actions, private readonly _tagService: TagsService) {}

  @Effect()
  loadTrendingTags$ = this._actions$.pipe(
    ofType(TagsActionType.LoadTrendingTags),
    switchMap((action: LoadTrendingTags) =>
      this._tagService.getTrendingTags().pipe(
        map(tags => {
          return { type: TagsActionType.TrendingTagsLoaded, payload: tags };
        }),
        catchError((err: HttpErrorResponse) => {
          return of({ type: TagsActionType.TrendingTagsLoaded, payload: null });
        }),
      ),
    ),
  );
}
