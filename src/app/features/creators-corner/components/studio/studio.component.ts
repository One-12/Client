import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';

import { filter } from 'rxjs/operators';

import { STUDIO_MENU } from '../../constants/studio-menu.constants';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PostDetailsBottomSheetComponent } from './_bottom-sheet/post-details-bottom-sheet/post-details-bottom-sheet.component';
import { PostDetailsModel } from '../../models/studio/post-details.model';

@Component({
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudioComponent implements OnInit {
  public text: string;

  public color: string;

  public imageUrl: string;

  public fontSize: number;

  private _postDetails: PostDetailsModel;

  private _mousePositionX: number;

  private _mousePositionY: number;

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _matBottomSheet: MatBottomSheet,
    @Inject(DOCUMENT) private readonly _document: Document,
  ) {
    this._initializeProperties();
  }

  ngOnInit(): void {
    this._activatedRoute.queryParams.pipe(filter(x => x.imageUrl)).subscribe(data => {
      this.imageUrl = data.imageUrl;
    });

    this._activatedRoute.queryParams.pipe(filter(x => x.menu)).subscribe(data => {
      if (data.menu) {
        this._selectMenuItems(data.menu);
      }
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

  public async onPostDetailsSaveButtonClicked(): Promise<void> {
    await this._router.navigate([], {
      queryParams: { menu: null },
      replaceUrl: true,
      relativeTo: this._activatedRoute,
      queryParamsHandling: 'merge',
    });
  }

  public onPostContentDragOver(dragEvent: DragEvent): void {
    dragEvent.preventDefault();
    this._mousePositionX = dragEvent.clientX;
    this._mousePositionY = dragEvent.clientY;
  }

  public onAddTextButtonClicked(): void {
    const postContent = this._document.querySelector('#post-messages');
    const textNode = this._document.createElement('section');
    textNode.innerText = this.text;
    textNode.draggable = true;
    textNode.classList.add('move');
    textNode.style.position = 'absolute';
    textNode.style.fontSize = `${this.fontSize}px`;
    textNode.style.color = this.color;
    textNode.style.background = 'transparent';
    textNode.addEventListener('dragend', this._onDragEnd.bind(this), false);
    postContent.appendChild(textNode);
  }

  private _onDragEnd(dragEvent: DragEvent): void {
    (dragEvent.target as HTMLElement).style.left = `${dragEvent.clientX}px`;
    (dragEvent.target as HTMLElement).style.top = `${dragEvent.clientY}px`;
  }

  private _initializeProperties(): void {
    this.fontSize = 12;
    this.color = '#1657a7';
    this._postDetails = this._getDefaultPostDetails();
  }

  private _selectMenuItems(selectedMenu: string): void {
    switch (selectedMenu) {
      case STUDIO_MENU.AddShapes:
        break;
      case STUDIO_MENU.AddText:
        break;
      case STUDIO_MENU.PostDetails:
        const postDetailsBottomSheetComponentRef = this._matBottomSheet.open(PostDetailsBottomSheetComponent, {
          data: this._postDetails,
        });
        postDetailsBottomSheetComponentRef.afterDismissed().subscribe(async (data: PostDetailsModel) => {
          if (data) {
            this._postDetails = data;
          }

          await this._resetQueryParams();
        });
        break;
      default:
        break;
    }
  }

  private _getDefaultPostDetails(): PostDetailsModel {
    return {
      isAnonymous: false,
      source: '',
      tags: [],
      description: '',
      title: '',
    };
  }

  private async _resetQueryParams(): Promise<void> {
    await this._router.navigate([], {
      queryParams: { menu: null },
      replaceUrl: true,
      relativeTo: this._activatedRoute,
      queryParamsHandling: 'merge',
    });
  }
}
