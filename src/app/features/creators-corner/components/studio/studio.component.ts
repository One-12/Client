import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudioComponent implements OnInit {
  public imageUrl: string;

  constructor(private readonly _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.queryParams.pipe(filter(x => x.imageUrl)).subscribe(data => {
      this.imageUrl = data.imageUrl;
    });
  }
}
