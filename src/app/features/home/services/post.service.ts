import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ConfigService } from '../../../core/services/config.service';
import { PostResponseModel } from '../models/post/post-response.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly baseUrl: any;

  constructor(
    private readonly _configService: ConfigService,
    private readonly _httpClient: HttpClient,
  ) {
    const apiConfig = this._configService.getConfig('api');
    this.baseUrl = apiConfig.baseUrl;
  }

  public getPostsForFeed(startIndex: number = 0, limit: number = 0): Observable<PostResponseModel> {
    const apiUrl = `${this.baseUrl}/api/posts?start=${startIndex}&limit=${limit}`;
    return this._httpClient.get<PostResponseModel>(apiUrl);
  }
}
