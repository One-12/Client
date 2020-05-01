import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ConfigService } from '../../../core/services/config.service';
import { PostRequestModel } from '../models/post/post-request.model';
import { PostResponseModel } from '../models/post/post-response.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly baseUrl: any;

  constructor(private readonly _configService: ConfigService, private readonly _httpClient: HttpClient) {
    const apiConfig = this._configService.getConfig('api');
    this.baseUrl = apiConfig.baseUrl;
  }

  public getPosts(postRequest: PostRequestModel): Observable<PostResponseModel> {
    let httpParams = new HttpParams();
    const apiUrl = `${this.baseUrl}/api/posts`;
    httpParams = httpParams.append('page', postRequest.page);
    httpParams = httpParams.append('offset', String(postRequest.offset));
    httpParams = httpParams.append('limit', String(postRequest.limit));
    httpParams = httpParams.append('tag', String(postRequest.tag));

    return this._httpClient.get<PostResponseModel>(apiUrl, { params: httpParams });
  }
}
