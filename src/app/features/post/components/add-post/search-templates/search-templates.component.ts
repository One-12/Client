import { Component, OnInit } from '@angular/core';
import { EMPTY_STRING } from '../../../../shared/constants/constants';

@Component({
  selector: 'search-templates',
  templateUrl: 'search-templates.component.html',
  styleUrls: ['./search-templates.component.scss'],
})
export class SearchTemplatesComponent implements OnInit {
  public searchQuery: string;

  public ngOnInit(): void {
    this._initializeProperties();
  }

  private _initializeProperties(): void {
    this.searchQuery = EMPTY_STRING;
  }
}
