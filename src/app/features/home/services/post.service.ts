import { Injectable } from '@angular/core';

import { ConfigService } from '../../../core/services/config.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly baseUrl: any;

  constructor(private readonly configService: ConfigService) {
    this.baseUrl = this.configService.getConfig('endPoint');
  }

  getPostsForFeed() {
    console.log(this.baseUrl);
  }
}
