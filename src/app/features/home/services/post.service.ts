import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ApiService } from '../../shared/services/api.service';
import { ConfigService } from '../../../core/services/config.service';

import { Payload } from '../../shared/models/payload.model';
import { PostRequestModel } from '../models/post/post-request.model';
import { PostResponseModel } from '../models/post/post-response.model';

@Injectable({
  providedIn: 'root',
})
export class PostService extends ApiService {
  constructor(httpClient: HttpClient, configService: ConfigService) {
    super(httpClient, configService);
  }

  public getPosts(payload: Payload<PostRequestModel>): Observable<PostResponseModel> {
    const { idToken } = payload;
    const postRequest = payload.content;
    const headers = this.getDefaultHttpHeaders(idToken);

    let params = new HttpParams();
    params = params.append('page', postRequest.page);
    params = params.append('tag', String(postRequest.tag));
    params = params.append('limit', String(postRequest.limit));
    params = params.append('offset', String(postRequest.offset));

    const apiUrl = `${this.baseUrl}/api/posts`;
    return this._httpClient.get<PostResponseModel>(apiUrl, { params, headers });
  }
}
