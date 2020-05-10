import { Injectable } from '@angular/core';
import { POST_PAGES } from '../utils/constants';
import { NavItemModel } from '../models/nav/nav-item.model';

@Injectable({
  providedIn: 'root',
})
export class MenuItemsService {
  constructor() {}

  public getMenuItems(): NavItemModel[] {
    return [
      { id: POST_PAGES.Fresh, title: 'Fresh', icon: 'fa-binoculars' },
      { id: POST_PAGES.MyFeeds, title: 'My Feeds', icon: 'fa-chalkboard' },
      { id: POST_PAGES.EditorPicks, title: 'Editor Picks', icon: 'fa-user-tie' },
      { id: POST_PAGES.Discover, title: 'Discover', icon: 'fa-fire' },
    ];
  }
}
