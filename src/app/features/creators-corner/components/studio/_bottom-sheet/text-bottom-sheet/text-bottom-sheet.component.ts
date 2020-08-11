import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { PostAddTextModel } from '../../../../models/studio/post-add-text.model';

@Component({
  templateUrl: './text-bottom-sheet.component.html',
  styleUrls: ['./text-bottom-sheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextBottomSheetComponent {
  public addTextModel: PostAddTextModel;

  constructor(private readonly _bottomSheetRef: MatBottomSheetRef<TextBottomSheetComponent>) {
    this._initializeProperties();
  }

  public onAddTextButtonClicked(): void {
    this._bottomSheetRef.dismiss();
  }

  public onCloseButtonClicked(): void {
    this._bottomSheetRef.dismiss();
  }

  private _initializeProperties(): void {
    this.addTextModel = {
      text: '',
      fontSize: 18,
      fontColor: '#1657a7',
    };
  }
}
