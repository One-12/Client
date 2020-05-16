import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { EMPTY_STRING } from '../../../../shared/constants/constants';
import { SearchTemplatesResponseModel } from '../../../models/template/search-templates-response.model';

@Component({
  selector: 'one-12-search-templates-panel',
  templateUrl: 'search-templates-panel.component.html',
  styleUrls: ['./search-templates-panel.component.scss'],
})
export class SearchTemplatesPanelComponent implements OnInit {
  @Output()
  public templateSelected = new EventEmitter<SearchTemplatesResponseModel>();

  public searchQuery: string;

  public searchResults: SearchTemplatesResponseModel[];

  public ngOnInit(): void {
    this._initializeProperties();
  }

  private _initializeProperties(): void {
    this.searchResults = [];
    this.searchQuery = EMPTY_STRING;

    for (let i = 0; i < 25; i++) {
      this.searchResults.push({
        title: `Images ${i}`,
        imageUrl: 'https://picsum.photos/200/300',
      });
    }
  }

  public async onTemplateSelected(selectedTemplate: SearchTemplatesResponseModel): Promise<void> {
    this.templateSelected.emit(selectedTemplate);
  }
}
