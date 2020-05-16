import { Component, Inject, Input } from '@angular/core';
import { ChangeDetectionStrategy, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';

import { SearchTemplatesResponseModel } from '../../../models/template/search-templates-response.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'one12-add-post-component',
  templateUrl: './add-post-component.component.html',
  styleUrls: ['./add-post-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPostComponentComponent implements OnChanges {
  @Input()
  public selectedTemplate: SearchTemplatesResponseModel;

  @ViewChild('postCanvas', { static: false })
  public postCanvasRef: ElementRef;

  public title: string;

  public imageUrl: string;

  private clientX: number;

  private clientY: number;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this._initializeProperties();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const selectedTemplateChanges = changes['selectedTemplate'];

    if (selectedTemplateChanges && selectedTemplateChanges.currentValue) {
      this.imageUrl = (<SearchTemplatesResponseModel>selectedTemplateChanges.currentValue).imageUrl;
      let imageElement = new Image();
      imageElement.src = this.imageUrl;
      let postContent = document.querySelector('#post-messages');
      var textnode = document.createElement('section');
      textnode.innerText = 'Hello World';
      textnode.draggable = true;
      textnode.style.position = 'absolute';
      textnode.addEventListener('dragstart', ev => {
        ev.dataTransfer.setData('text/plain', null);
        ev.dataTransfer.setDragImage(new Image(), 0, 0);
      });
      textnode.addEventListener('dragend', this.onDrag.bind(this), false);
      postContent.appendChild(textnode);

      return;
    }
  }

  private _initializeProperties(): void {
    this.title = 'TITLE';
    this.document.addEventListener('dragover', ev => {
      this.clientX = ev.clientX;
      this.clientY = ev.clientY;
    });
  }

  private onDrag(dragEvent: any) {
    dragEvent.stopPropagation();
    (<HTMLElement>dragEvent.explicitOriginalTarget).style.left = `${this.clientX}px`;
    (<HTMLElement>dragEvent.explicitOriginalTarget).style.top = `${this.clientY}px`;
  }

  onTextDroppedOverImage($event: DragEvent) {
    console.log($event);
  }
}