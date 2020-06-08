import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ApiService } from '../../shared/services/api.service';
import { ConfigService } from '../../../core/services/config.service';

import { GetTrendingTagResponseModel } from '../models/tag/get-trending-tag-response.model';

@Injectable({
  providedIn: 'root',
})
export class TagsService extends ApiService {
  /**
   * Creates an instance of TagsService.
   * @param {HttpClient} httpClient
   * @param {ConfigService} configService
   * @memberof TagsService
   */
  constructor(httpClient: HttpClient, configService: ConfigService) {
    super(httpClient, configService);
  }

  /**
   * Gets Trending Tags
   * @returns {Observable<GetTrendingTagResponseModel[]>}
   * @memberof TagsService
   */
  public getTrendingTags(): Observable<GetTrendingTagResponseModel[]> {
    const apiUrl = `${this.baseUrl}/api/tags/trending`;
    const tagsResponse = [];

    for (let i = 1; i <= 20; i++) {
      const tag: GetTrendingTagResponseModel = {
        id: `Tag ${i}`,
        name: `Tag ${i}`,
      };

      tagsResponse.push(tag);
    }

    return of<GetTrendingTagResponseModel[]>(tagsResponse).pipe(delay(2000));
    // return this._httpClient.get<GetTrendingTagResponseModel>(apiUrl);
  }
}
