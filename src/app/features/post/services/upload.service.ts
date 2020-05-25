import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ConfigService } from '../../../core/services/config.service';
import { UploadFileResponseModel } from '../models/post/upload-file-response.model';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  private readonly baseUrl: string;

  constructor(private readonly _httpClient: HttpClient, private readonly _configService: ConfigService) {
    const apiConfig = this._configService.getConfig('api');
    this.baseUrl = apiConfig.baseUrl;
  }

  public uploadFiles(fileToUpload: File): Observable<UploadFileResponseModel> {
    const apiUrl = `${this.baseUrl}/api/upload`;

    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this._httpClient.post<UploadFileResponseModel>(apiUrl, formData);
  }
}
