import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { filter } from 'rxjs/operators';

import { STUDIO_MENU } from '../../constants/studio-menu.constants';

@Component({
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudioComponent implements OnInit {
  public imageUrl: string;

  public postTitle: string;

  public postSource: string;

  public postDescription: string;

  public isPostAnonymous: boolean;

  public isDetailsMenuSelected: boolean;

  public isAddTextMenuSelected: boolean;

  public isAddShapeMenuSelected: boolean;

  constructor(private readonly _router: Router, private readonly _activatedRoute: ActivatedRoute) {
    this._initializeProperties();
  }

  ngOnInit(): void {
    this._activatedRoute.queryParams.pipe(filter(x => x.imageUrl)).subscribe(data => {
      this.imageUrl = data.imageUrl;
    });

    this._activatedRoute.queryParams.pipe(filter(x => x.menu)).subscribe(data => {
      this._resetMenuSelection();
      this._selectMenuItems(data.menu);
    });
  }

  public async onMenuItemSelected(selectedMenu: string): Promise<void> {
    await this._router.navigate([], {
      queryParams: { menu: selectedMenu },
      replaceUrl: true,
      relativeTo: this._activatedRoute,
      queryParamsHandling: 'merge',
    });
  }

  private _initializeProperties(): void {
    this._resetMenuSelection();
  }

  private _resetMenuSelection(): void {
    this.isDetailsMenuSelected = false;
    this.isAddTextMenuSelected = false;
    this.isAddShapeMenuSelected = false;
  }

  private _selectMenuItems(data: string): void {
    switch (data) {
      case STUDIO_MENU.AddShapes:
        this.isAddShapeMenuSelected = true;
        break;
      case STUDIO_MENU.AddText:
        this.isAddTextMenuSelected = true;
        break;
      case STUDIO_MENU.PostDetails:
        this.isDetailsMenuSelected = true;
        break;
      default:
        this.isAddShapeMenuSelected = true;
        break;
    }
  }
}
