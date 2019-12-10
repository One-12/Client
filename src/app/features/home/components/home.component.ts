import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'one12-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
    public tags: string[];

    constructor() {
        this.tags = [
            'arun',
            'selva',
            'kumar',
            'arun',
            'selva',
            'kumar',
            'arun',
            'selva',
            'kumar',
            'arun',
            'selva',
            'kumar',
            'arun',
            'selva',
            'kumar',
        ];
    }

    ngOnInit() {}
}
