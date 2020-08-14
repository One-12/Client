import { DOCUMENT } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { OnChanges, SimpleChanges } from '@angular/core';
import { Component, Inject, Input, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';
import domtoimage from 'dom-to-image';

import { PostsFacade } from '../../../state/posts/posts.facade';
import { EMPTY_STRING } from '../../../../shared/constants/constants';
import { dataURLtoFile, nameOf } from '../../../../shared/utils/utils';
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

  public imageUrl: string;

  public description: string;

  public canShowAddTextPanel: boolean;

  private _mousePositionX: number;

  private _mousePositionY: number;

  constructor(
    private readonly _postsFacade: PostsFacade,
    private readonly _angularFireAuth: AngularFireAuth,
    @Inject(DOCUMENT) private readonly _document: Document,
  ) {
    this._initializeProperties();
  }

  public ngOnInit(): void {
    this._document.addEventListener('dragover', e => {
      e.preventDefault();
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const selectedTemplateProperty = nameOf<AddPostComponentComponent>('selectedTemplate');
    const selectedTemplateChanges = changes[selectedTemplateProperty];

    if (selectedTemplateChanges && selectedTemplateChanges.currentValue) {
      this.imageUrl = (selectedTemplateChanges.currentValue as SearchTemplatesResponseModel).imageUrl;
    }
  }

  public async onPostContentDragOver(dragEvent: DragEvent): Promise<void> {
    this._mousePositionX = dragEvent.clientX;
    this._mousePositionY = dragEvent.clientY;
  }

  public async onEnterKeyPressed(): Promise<void> {
    if (this.tag) {
      this.tags = [...this.tags, this.tag];
      this.tag = '';
    }
  }

  public async onUploadPostButtonClicked(): Promise<void> {
    this._angularFireAuth.idToken.pipe(take(1)).subscribe(async (idToken: string) => {
      const postContent = this._document.querySelector('.post-content');
      if (postContent) {
        this._postsFacade.uploadedContentUrl$.pipe(take(1)).subscribe(async url => {
          // await this._postsFacade.createPost({
          //   content: { content: url, tags: this.tags, title: this.title, type: 'image', description:  },
          //   idToken,
          // });
        });

        const postImage = await domtoimage.toPng(postContent);
        const postFile = await dataURLtoFile(postImage, 'hello.png', 'image/png');
        await this._postsFacade.uploadContent({ content: postFile, idToken });
      }
    });
  }

  public async onFileSelected(fileInputElement: HTMLInputElement): Promise<void> {
    if (fileInputElement.files && fileInputElement.files[0]) {
      this.imageUrl = URL.createObjectURL(fileInputElement.files[0]);
    }
  }

  public async onSaveTextButtonClicked(): Promise<void> {
    if (this.postText) {
      const postContent = this._document.querySelector('#post-messages');
      const textNode = this._document.createElement('section');
      textNode.innerText = this.postText;
      textNode.draggable = true;
      textNode.classList.add('move');
      textNode.style.position = 'absolute';
      textNode.style.fontSize = `${this.fontSize}px`;
      textNode.style.color = this.color;
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
    this.fontSize = 48;
    this.color = '#0ca867';
    this.canShowAddTextPanel = false;
  }

  private async _onDragEnd(dragEvent: DragEvent): Promise<void> {
    dragEvent.stopPropagation();
    (dragEvent.target as HTMLElement).style.left = `${this._mousePositionX}px`;
    (dragEvent.target as HTMLElement).style.top = `${this._mousePositionY}px`;
  }
}
