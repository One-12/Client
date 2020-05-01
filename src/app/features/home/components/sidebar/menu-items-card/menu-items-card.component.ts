import { Component, Output } from '@angular/core';
import { ChangeDetectionStrategy, EventEmitter } from '@angular/core';

import { POST_PAGES } from '../../../utils/constants';
import { NavItemModel } from '../../../models/nav/nav-item.model';

@Component({
  selector: 'one12-menu-items-card',
  templateUrl: './menu-items-card.component.html',
  styleUrls: ['./menu-items-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemsCardComponent {
  @Output()
  public navigationButtonClicked: EventEmitter<string>;

  public navItems: NavItemModel[];

  constructor() {
    this._initializeProperties();
  }

  public async onMenuItemClicked(item: NavItemModel): Promise<void> {
    this.navItems.forEach(navItem => (navItem.isSelected = navItem.id === item.id));
    await this.navigationButtonClicked.emit(item.id);
  }

  private _initializeProperties(): void {
    this.navigationButtonClicked = new EventEmitter<string>();
    this.navItems = [
      { isSelected: true, id: POST_PAGES.MyFeeds, title: 'My Feeds', icon: 'fa-chalkboard' },
      { isSelected: false, id: POST_PAGES.EditorPicks, title: 'Editor Picks', icon: 'fa-user-tie' },
      { isSelected: false, id: POST_PAGES.Fresh, title: 'Fresh', icon: 'fa-binoculars' },
      { isSelected: false, id: POST_PAGES.Discover, title: 'Discover', icon: 'fa-fire' },
    ];
  }
}
