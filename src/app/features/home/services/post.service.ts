import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { ApiService } from '../../shared/services/api.service';
import { ConfigService } from '../../../core/services/config.service';

import { Payload } from '../../shared/models/payload.model';
import { PostRequestModel } from '../models/post/post-request.model';
import { PostResponseModel } from '../models/post/post-response.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService extends ApiService {
  constructor(httpClient: HttpClient, configService: ConfigService) {
    super(httpClient, configService);
  }

  private static _getDefaultParamsForPost(postRequest: PostRequestModel): HttpParams {
    const { page, limit, offset, tag } = postRequest;
    let params = new HttpParams().set('page', page).set('limit', String(limit)).set('offset', String(offset));

    if (tag) {
      params = params.set('tag', String(tag));
    }

    return params;
  }

  public getPosts(payload: Payload<PostRequestModel>): Observable<PostResponseModel[]> {
    const { idToken } = payload;
    const postRequest = payload.content;
    const headers = this.getDefaultHttpHeaders(idToken);
    const params = PostService._getDefaultParamsForPost(postRequest);

    const apiUrl = `${this.baseUrl}/api/posts`;
    const postResponse = [];

    for (let i = 1; i <= payload.content.limit; i++) {
      const post: PostResponseModel = {
        id: String(postRequest.offset * postRequest.limit + i),
        commentsCount: Math.floor(Math.random() * 10),
        content: 'https://p0.sgpstatp.com/large/tos-alisg-i-0000/99ea1c401121462e9c7376e09846eb0e',
        likesCount: Math.floor(Math.random() * 10),
        points: Math.floor(Math.random() * 10),
        title: 'Title',
        type: 'Post',
        views: Math.floor(Math.random() * 10),
        tags: [{ id: 'Tamil', name: 'Tamil' }],
        postedOn: new Date(),
        postedBy: {
          firstName: 'Arun Selva Kumar',
          lastName: 'B',
          id: 'arunselvakumar',
          middleName: '',
          userName: 'arunselvakumar',
        },
      };
      postResponse.push(post);
    }

    return of<PostResponseModel[]>(postResponse).pipe(delay(2000));
    // return this._httpClient.get<PostResponseModel>(apiUrl, { params, headers });
  }
}
