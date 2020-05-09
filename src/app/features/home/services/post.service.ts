import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { PostRequestModel } from '../models/post/post-request.model';
import { ConfigService } from '../../../core/services/config.service';
import { PostResponseModel } from '../models/post/post-response.model';
import { AuthService } from '../../../core/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly baseUrl: any;

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _authService: AuthService,
    private readonly _configService: ConfigService,
    public readonly _angularFireAuth: AngularFireAuth,
  ) {
    const apiConfig = this._configService.getConfig('api');
    this.baseUrl = apiConfig.baseUrl;
  }

  public getPosts(postRequest: PostRequestModel): Observable<PostResponseModel> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('page', postRequest.page);
    httpParams = httpParams.append('offset', String(postRequest.offset));
    httpParams = httpParams.append('limit', String(postRequest.limit));
    httpParams = httpParams.append('tag', String(postRequest.tag));

    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Authorization', `Bearer ${this._authService.idToken}`);

    const apiUrl = `${this.baseUrl}/api/posts`;
    return this._httpClient.get<PostResponseModel>(apiUrl, { params: httpParams });
  }
}
