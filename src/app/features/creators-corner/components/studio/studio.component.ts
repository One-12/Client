import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';

import { filter } from 'rxjs/operators';

import { STUDIO_MENU } from '../../constants/studio-menu.constants';
import { PostDetailsModel } from '../../models/studio/post-details.model';
import { PostAddTextModel } from '../../models/studio/post-add-text.model';

import { TextBottomSheetComponent } from './_bottom-sheet/text-bottom-sheet/text-bottom-sheet.component';
import { PostDetailsBottomSheetComponent } from './_bottom-sheet/post-details-bottom-sheet/post-details-bottom-sheet.component';

@Component({
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudioComponent implements OnInit {
  public imageUrl: string;

  public isAddTextButtonSelected: boolean;

  public isPostDetailsButtonSelected: boolean;

  private _postDetails: PostDetailsModel;

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _matBottomSheet: MatBottomSheet,
    @Inject(DOCUMENT) private readonly _document: Document,
  ) {
    this._initializeProperties();
  }

  public ngOnInit(): void {
    this._activatedRoute.queryParams.pipe(filter(x => x.imageUrl)).subscribe(data => {
      this.imageUrl = data.imageUrl;
    });

    this._activatedRoute.queryParams.pipe(filter(x => x.menu)).subscribe(data => {
      if (data.menu) {
        this._resetMenuSelection();
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

  private _onDragEnd(dragEvent: DragEvent): void {
    (dragEvent.target as HTMLElement).style.left = `${dragEvent.clientX}px`;
    (dragEvent.target as HTMLElement).style.top = `${dragEvent.clientY}px`;
  }

  private _initializeProperties(): void {
    this._postDetails = this._getDefaultPostDetails();
    this._resetMenuSelection();
  }

  private _selectMenuItems(selectedMenu: string): void {
    switch (selectedMenu) {
      case STUDIO_MENU.AddText:
        this.isAddTextButtonSelected = true;
        const textBottomSheetComponentRef = this._matBottomSheet.open(TextBottomSheetComponent);
        textBottomSheetComponentRef.afterDismissed().subscribe(async (data: PostAddTextModel) => {
          if (data) {
            this._onAddTextButtonClicked(data);
          }

          await this._resetQueryParams();
        });
        break;
      case STUDIO_MENU.PostDetails:
        this.isPostDetailsButtonSelected = true;
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

  private _onAddTextButtonClicked(addTextPostModel: PostAddTextModel): void {
    const postContent = this._document.querySelector('#post-messages');
    const textNode = this._document.createElement('section');
    textNode.innerText = addTextPostModel.text;
    textNode.draggable = true;
    textNode.classList.add('move');
    textNode.style.position = 'absolute';
    textNode.style.fontSize = `${addTextPostModel.fontSize}px`;
    textNode.style.color = addTextPostModel.fontColor;
    textNode.style.background = 'transparent';
    textNode.addEventListener('dragend', this._onDragEnd.bind(this), false);
    postContent.appendChild(textNode);
  }

  private async _resetQueryParams(): Promise<void> {
    await this._router.navigate([], {
      queryParams: { menu: null },
      replaceUrl: true,
      relativeTo: this._activatedRoute,
      queryParamsHandling: 'merge',
    });
  }

  private _resetMenuSelection(): void {
    this.isAddTextButtonSelected = false;
    this.isPostDetailsButtonSelected = false;
  }
}
