import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import html2canvas from 'html2canvas';

import { nameOf } from '../../../../shared/utils/utils';
import { EMPTY_STRING } from '../../../../shared/constants/constants';
import { SearchTemplatesResponseModel } from '../../../models/template/search-templates-response.model';

@Component({
  selector: 'one12-add-post-component',
  templateUrl: './add-post-component.component.html',
  styleUrls: ['./add-post-component.component.scss'],
})
export class AddPostComponentComponent implements OnChanges, OnInit {
  @Input()
  public selectedTemplate: SearchTemplatesResponseModel;

  public tag: string;

  public color: string;

  public title: string;

  public tags: string[];

  public postText: string;

  public fontSize: number;

  public imageUrl: SafeUrl;

  public description: string;

  public canShowAddTextPanel: boolean;

  private _mousePositionX: number;

  private _mousePositionY: number;

  constructor(@Inject(DOCUMENT) private document: Document, private readonly _domSanitizer: DomSanitizer) {
    this._initializeProperties();
  }

  public ngOnInit(): void {
    document.addEventListener('dragover', e => {
      e.preventDefault();
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const selectedTemplateProperty = nameOf<AddPostComponentComponent>('selectedTemplate');
    const selectedTemplateChanges = changes[selectedTemplateProperty];

    if (selectedTemplateChanges && selectedTemplateChanges.currentValue) {
      const url = (selectedTemplateChanges.currentValue as SearchTemplatesResponseModel).imageUrl;
      this.imageUrl = this._domSanitizer.bypassSecurityTrustUrl(url);
      const imageElement = new Image();
      // @ts-ignore: Sanitized URL.
      imageElement.src = this.imageUrl;
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
      this.imageUrl = this._domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(fileInputElement.files[0]));
    }
  }

  public async onSaveTextButtonClicked(): Promise<void> {
    if (this.postText) {
      const postContent = document.querySelector('#post-messages');
      const textNode = document.createElement('section');
      textNode.innerText = this.postText;
      textNode.draggable = true;
      textNode.style.position = 'absolute';
      textNode.style.fontSize = `${this.fontSize}px`;
      textNode.style.color = this.color;
      textNode.addEventListener('dragstart', ev => {
        ev.dataTransfer.setData('text/plain', null);
        ev.dataTransfer.setDragImage(new Image(), 0, 0);
      });
      textNode.addEventListener('dragend', this._onDragEnd.bind(this), false);
      postContent.appendChild(textNode);
    }

    this.postText = EMPTY_STRING;
    this.canShowAddTextPanel = false;
  }

  private _initializeProperties(): void {
    this._mousePositionX = 0;
    this._mousePositionY = 0;

    this.tags = [];
    this.fontSize = 12;
    this.color = '#0ca867';
    this.canShowAddTextPanel = false;
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
