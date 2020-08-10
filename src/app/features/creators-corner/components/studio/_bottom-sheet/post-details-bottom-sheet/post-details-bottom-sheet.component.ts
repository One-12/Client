import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { PostDetailsModel } from '../../../../models/studio/post-details.model';

@Component({
  templateUrl: './post-details-bottom-sheet.component.html',
  styleUrls: ['./post-details-bottom-sheet.component.scss'],
})
export class PostDetailsBottomSheetComponent {
  public tag: string;

  public postDetails: PostDetailsModel;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) private readonly data: PostDetailsModel,
    private _bottomSheetRef: MatBottomSheetRef<PostDetailsBottomSheetComponent>,
  ) {
    console.log(data);
    this.postDetails = { ...data };
  }

  public onEnterKeyPressedOnTags(): void {
    if (this.tag) {
      this.postDetails.tags = [...this.postDetails.tags, this.tag];
      this.tag = '';
    }
  }

  public onPostDetailsSaveButtonClicked(): void {
    this._bottomSheetRef.dismiss({ ...this.postDetails });
  }

  public onPostDetailsCloseButtonClicked(): void {
    this._bottomSheetRef.dismiss();
  }
}
