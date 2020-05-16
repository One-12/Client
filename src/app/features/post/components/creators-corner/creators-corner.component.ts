import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SearchTemplatesResponseModel } from '../../models/template/search-templates-response.model';

@Component({
  selector: 'one12-creators-corner',
  templateUrl: './creators-corner.component.html',
  styleUrls: ['./creators-corner.component.scss'],
})
export class CreatorsCornerComponent implements OnInit {
  public selectedTemplate: SearchTemplatesResponseModel;

  constructor(private readonly _router: Router) {}

  public ngOnInit(): void {}

  public async onBackButtonClicked(): Promise<void> {
    await this._router.navigate(['/']);
  }
}
