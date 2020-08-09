import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { filter } from 'rxjs/operators';

import { STUDIO_MENU } from '../constants/studio-menu.constants';

@Component({
  selector: 'one12-creators-corner',
  templateUrl: './creators-corner.component.html',
  styleUrls: ['./creators-corner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorsCornerComponent implements OnInit {
  public selectedTemplate: string;

  constructor(private readonly _router: Router, private readonly _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.queryParams.pipe(filter(param => param.selectedTemplate)).subscribe(param => {
      this.selectedTemplate = param.selectedTemplate;
    });
  }

  public async onFileSelected(fileInputElement: HTMLInputElement): Promise<void> {
    if (fileInputElement.files && fileInputElement.files[0]) {
      const image = URL.createObjectURL(fileInputElement.files[0]);
      await this._router.navigate(['creators-corner/studio'], {
        queryParams: { imageUrl: image, menu: STUDIO_MENU.PostDetails },
      });
    }
  }
}
