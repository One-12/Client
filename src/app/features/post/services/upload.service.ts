import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ApiService } from '../../shared/services/api.service';
import { ConfigService } from '../../../core/services/config.service';

import { Payload } from '../../shared/models/payload.model';
import { UploadFileResponseModel } from '../models/post/upload-file-response.model';

@Injectable({
  providedIn: 'root',
})
export class UploadService extends ApiService {
  constructor(_httpClient: HttpClient, _configService: ConfigService) {
    super(_httpClient, _configService);
  }

  public uploadFiles(payload: Payload<File>): Observable<UploadFileResponseModel> {
    const { idToken } = payload;
    const apiUrl = `${this.baseUrl}/api/upload`;

    const formData: FormData = new FormData();
    formData.append('file', payload.content, payload.content.name);
    return this._httpClient.post<UploadFileResponseModel>(apiUrl, formData, {
      headers: this.getDefaultHttpHeaders(idToken),
    });
  }
}
