import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ApiService } from '../../shared/services/api.service';
import { ConfigService } from '../../../core/services/config.service';

import { Payload } from '../../shared/models/payload.model';
import { UploadFileResponseModel } from '../models/post/upload-file-response.model';

@Injectable({
  providedIn: 'root',
})
export class UploadService extends ApiService {
  constructor(httpClient: HttpClient, configService: ConfigService) {
    super(httpClient, configService);
  }

  public uploadFiles(payload: Payload<File>): Observable<UploadFileResponseModel> {
    const { idToken } = payload;
    const headers = this.getDefaultHttpHeaders(idToken);

    const formData: FormData = new FormData();
    formData.append('file', payload.content, payload.content.name);

    const apiUrl = `${this.baseUrl}/api/upload`;
    return this._httpClient.post<UploadFileResponseModel>(apiUrl, formData, { headers });
  }
}
