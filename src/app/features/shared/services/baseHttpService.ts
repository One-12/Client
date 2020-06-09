import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../../../core/services/config.service';

export class BaseHttpService {
  protected readonly baseUrl: string;

  constructor(protected readonly _httpClient: HttpClient, protected readonly _configService: ConfigService) {
    const apiConfig = this._configService.getConfig('api');
    this.baseUrl = apiConfig.baseUrl;
  }

  public getDefaultHttpHeaders(idToken: string): HttpHeaders {
    let headers = new HttpHeaders();
    if (idToken) {
      headers = headers.set('Authorization', `Bearer ${idToken}`);
    }

    return headers;
  }
}
