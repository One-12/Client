import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'one12-menu-items-card',
  templateUrl: './menu-items-card.component.html',
  styleUrls: ['./menu-items-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemsCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
