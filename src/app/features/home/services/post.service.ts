import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Payload } from '../../shared/models/payload.model';
import { PostRequestModel } from '../models/post/post-request.model';
import { ConfigService } from '../../../core/services/config.service';
import { PostResponseModel } from '../models/post/post-response.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly baseUrl: any;

  constructor(private readonly _httpClient: HttpClient, private readonly _configService: ConfigService) {
    const apiConfig = this._configService.getConfig('api');
    this.baseUrl = apiConfig.baseUrl;
  }

  public getPosts(payload: Payload<PostRequestModel>): Observable<PostResponseModel> {
    const { idToken } = payload;
    const postRequest = payload.payload;

    let params = new HttpParams();
    params = params.append('page', postRequest.page);
    params = params.append('tag', String(postRequest.tag));
    params = params.append('limit', String(postRequest.limit));
    params = params.append('offset', String(postRequest.offset));

    let headers = new HttpHeaders();
    if (idToken) {
      headers = headers.set('Authorization', `Bearer ${idToken}`);
    }

    const apiUrl = `${this.baseUrl}/api/posts`;
    return this._httpClient.get<PostResponseModel>(apiUrl, { params, headers });
  }
}
