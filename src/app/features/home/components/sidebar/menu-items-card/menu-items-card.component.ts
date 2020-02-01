import { Component, Output } from '@angular/core';
import { ChangeDetectionStrategy, EventEmitter } from '@angular/core';

import { NAVIGATION_MENU_ITEMS } from '../../../utils/constants';

@Component({
  selector: 'one12-menu-items-card',
  templateUrl: './menu-items-card.component.html',
  styleUrls: ['./menu-items-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemsCardComponent {
  @Output()
  public navigationButtonClicked: EventEmitter<string>;

  constructor() {
    this.navigationButtonClicked = new EventEmitter<string>();
  }

  public async onMyFeedsButtonClicked(): Promise<void> {
    await this.navigationButtonClicked.emit(NAVIGATION_MENU_ITEMS.MyFeeds);
  }

  public async onEditionPicksButtonClicked(): Promise<void> {
    await this.navigationButtonClicked.emit(NAVIGATION_MENU_ITEMS.EditorPicks);
  }

  public async onFreshButtonClicked(): Promise<void> {
    await this.navigationButtonClicked.emit(NAVIGATION_MENU_ITEMS.Fresh);
  }

  public async onDiscoverButtonClicked(): Promise<void> {
    await this.navigationButtonClicked.emit(NAVIGATION_MENU_ITEMS.Discover);
  }
}
