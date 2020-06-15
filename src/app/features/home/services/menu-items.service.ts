import { Injectable } from '@angular/core';

import { HOME_PAGES } from '../utils/constants';
import { NavItemModel } from '../models/nav/nav-item.model';

@Injectable({
  providedIn: 'root',
})
export class MenuItemsService {
  /**
   * Returns Home Page Menu Items
   */
  public getHomePageMenuItems(): NavItemModel[] {
    return [
      { id: HOME_PAGES.Fresh, title: 'Fresh', icon: 'fa-binoculars' },
      { id: HOME_PAGES.MyFeeds, title: 'My Feeds', icon: 'fa-chalkboard' },
      { id: HOME_PAGES.EditorPicks, title: 'Editor Picks', icon: 'fa-user-tie' },
      { id: HOME_PAGES.Discover, title: 'Discover', icon: 'fa-fire' },
      { id: null, title: null, icon: null },
      { id: HOME_PAGES.AddNewPost, title: 'Upload New Post', icon: 'fa-plus' },
      { id: HOME_PAGES.AddNewTemplate, title: 'Upload New Template', icon: 'fa-palette' },
    ];
  }
}
