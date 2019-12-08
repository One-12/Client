import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'one12-tag-stream',
    templateUrl: './tag-stream.component.html',
    styleUrls: ['./tag-stream.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagStreamComponent {
    @Input() public tags: string[];

    constructor() {
      this._initializeProperties();
    }

    private _initializeProperties() {
      this.tags = [];
    }
}
