import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';

import html2canvas from 'html2canvas';

import { nameOf } from '../../../../shared/utils/utils';
import { SearchTemplatesResponseModel } from '../../../models/template/search-templates-response.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'one12-add-post-component',
  templateUrl: './add-post-component.component.html',
  styleUrls: ['./add-post-component.component.scss'],
})
export class AddPostComponentComponent implements OnChanges {
  @Input()
  public selectedTemplate: SearchTemplatesResponseModel;

  public title: string;

  public tag: string;

  public tags: string[];

  public description: string;

  public imageUrl: SafeUrl;

  private _mousePositionX: number;

  private _mousePositionY: number;

  constructor(@Inject(DOCUMENT) private document: Document, private readonly _sanitizer: DomSanitizer) {
    this._initializeProperties();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const selectedTemplateProperty = nameOf<AddPostComponentComponent>('selectedTemplate');
    const selectedTemplateChanges = changes[selectedTemplateProperty];

    if (selectedTemplateChanges && selectedTemplateChanges.currentValue) {
      const url = (selectedTemplateChanges.currentValue as SearchTemplatesResponseModel).imageUrl;
      this.imageUrl = this._sanitizer.bypassSecurityTrustUrl(url);
      const imageElement = new Image();
      // @ts-ignore: Sanitized URL.
      imageElement.src = this.imageUrl;
      const postContent = document.querySelector('#post-messages');
      const textnode = document.createElement('section');
      textnode.innerText = 'Hello World';
      textnode.draggable = true;
      textnode.style.position = 'absolute';
      textnode.addEventListener('dragstart', ev => {
        ev.dataTransfer.setData('text/plain', null);
        ev.dataTransfer.setDragImage(new Image(), 0, 0);
      });
      textnode.addEventListener('dragend', this._onDragEnd.bind(this), false);
      postContent.appendChild(textnode);
    }
  }

  public async onPostContentDragOver($event: DragEvent): Promise<void> {
    this._mousePositionX = $event.clientX;
    this._mousePositionY = $event.clientY;
  }

  public async onEnterKeyPressed(): Promise<void> {
    if (this.tag) {
      this.tags = [...this.tags, this.tag];
      this.tag = '';
    }
  }

  public async onFileSelected(fileInputElement: HTMLInputElement): Promise<void> {
    if (fileInputElement.files && fileInputElement.files[0]) {
      this.imageUrl = this._sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(fileInputElement.files[0]));
    }
  }

  private _initializeProperties(): void {
    this._mousePositionX = 0;
    this._mousePositionY = 0;

    this.tags = [];
  }

  private async _onDragEnd(dragEvent: DragEvent): Promise<void> {
    dragEvent.stopPropagation();
    (dragEvent.target as HTMLElement).style.left = `${this._mousePositionX}px`;
    (dragEvent.target as HTMLElement).style.top = `${this._mousePositionY}px`;

    /*
    const canvas = await html2canvas(this.document.querySelector('.post-content'), { allowTaint: true });
    this.document.querySelector('#id-content').appendChild(canvas);
     */
  }
}
