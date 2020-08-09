import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';

import { filter } from 'rxjs/operators';

import { STUDIO_MENU } from '../../constants/studio-menu.constants';
import { DOCUMENT } from '@angular/common';

@Component({
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudioComponent implements OnInit {
  public tag: string;

  public tags: string[];

  public text: string;

  public color: string;

  public imageUrl: string;

  public fontSize: number;

  public postTitle: string;

  public postSource: string;

  public postDescription: string;

  public isPostAnonymous: boolean;

  public isDetailsMenuSelected: boolean;

  public isAddTextMenuSelected: boolean;

  public isAddShapeMenuSelected: boolean;

  private _mousePositionX: number;

  private _mousePositionY: number;

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private readonly _document: Document,
  ) {
    this._initializeProperties();
  }

  ngOnInit(): void {
    this._activatedRoute.queryParams.pipe(filter(x => x.imageUrl)).subscribe(data => {
      this.imageUrl = data.imageUrl;
    });

    this._activatedRoute.queryParams.pipe(filter(x => x.menu)).subscribe(data => {
      this._resetMenuSelection();
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

    this._resetMenuSelection();
  }

  public onPostContentDragOver(dragEvent: DragEvent): void {
    dragEvent.preventDefault();
    this._mousePositionX = dragEvent.clientX;
    this._mousePositionY = dragEvent.clientY;
    console.log('Dragging Event', dragEvent);
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

  public onEnterKeyPressedOnTags(): void {
    if (this.tag) {
      this.tags = [...this.tags, this.tag];
      this.tag = '';
    }
  }

  private _onDragEnd(dragEvent: DragEvent): void {
    console.log('End Event', dragEvent);
    // dragEvent.stopPropagation();
    (dragEvent.target as HTMLElement).style.left = `${dragEvent.clientX}px`;
    (dragEvent.target as HTMLElement).style.top = `${dragEvent.clientY}px`;
  }

  private _initializeProperties(): void {
    this.tags = [];
    this.fontSize = 12;
    this.color = '#1657a7';

    this._resetMenuSelection();
  }

  private _resetMenuSelection(): void {
    this.isDetailsMenuSelected = false;
    this.isAddTextMenuSelected = false;
    this.isAddShapeMenuSelected = false;
  }

  private _selectMenuItems(selectedMenu: string): void {
    switch (selectedMenu) {
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

  onUIElementDropped($event: DragEvent) {
    console.log('Paara');
    console.log($event);
  }
}
