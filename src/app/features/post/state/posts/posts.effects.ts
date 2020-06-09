import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { UploadHttpService } from '../../services/upload-http.service';
import { PostsActionType, UploadContent } from './posts.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsEffects {
  constructor(private readonly _actions$: Actions, private readonly _uploadService: UploadHttpService) {}

  @Effect()
  uploadContent$ = this._actions$.pipe(
    ofType(PostsActionType.UploadContent),
    switchMap((action: UploadContent) =>
      this._uploadService.uploadFiles(action.payload).pipe(
        map(uploadedContent => {
          return { type: PostsActionType.ContentUploaded, payload: uploadedContent };
        }),
        catchError((err: HttpErrorResponse) => {
          return of({ type: PostsActionType.ContentUploadFailed });
        }),
      ),
    ),
  );
}
