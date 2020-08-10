import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  templateUrl: './create-post-type-sheet.component.html',
  styleUrls: ['./create-post-type-sheet.component.scss'],
})
export class CreatePostTypeSheetComponent {
  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _bottomSheetRef: MatBottomSheetRef<CreatePostTypeSheetComponent>,
  ) {}

  public async onSelectedImageButtonClicked($event: MouseEvent): Promise<void> {
    $event.preventDefault();

    this._bottomSheetRef.dismiss();
    await this._router.navigate(['/creators-corner'], { replaceUrl: true, relativeTo: this._activatedRoute });
  }
}
