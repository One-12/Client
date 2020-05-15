import { Component, OnInit } from '@angular/core';
import { EMPTY_STRING } from '../../../../shared/constants/constants';
import { SearchTemplatesResponseModel } from '../../../models/template/search-templates-response.model';

@Component({
  selector: 'search-templates',
  templateUrl: 'search-templates.component.html',
  styleUrls: ['./search-templates.component.scss'],
})
export class SearchTemplatesComponent implements OnInit {
  public searchQuery: string;

  public searchResults: SearchTemplatesResponseModel[];

  public ngOnInit(): void {
    this._initializeProperties();
  }

  private _initializeProperties(): void {
    this.searchQuery = EMPTY_STRING;
    this.searchResults = [];

    for (let i = 0; i < 25; i++) {
      this.searchResults.push({
        title: `Images ${i}`,
        imageUrl: 'https://picsum.photos/200/300',
      });
    }
  }
}
