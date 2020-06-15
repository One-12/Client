import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NavItemModel } from '../../../../home/models/nav/nav-item.model';

@Component({
  selector: 'one12-menu-items-card',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
})
export class MenuItemsComponent {
  @Input()
  public navItems: NavItemModel[] = [];

  @Input()
  public selectedNavItem: NavItemModel;

  /**
   * Creates an instance of Menu Items Component
   * @param _router
   * @param _activatedRoute
   */
  constructor(private readonly _router: Router, private readonly _activatedRoute: ActivatedRoute) {}

  /**
   * Event Handler when Menu Item is Clicked.
   * @param item
   */
  public async onMenuItemClicked(item: NavItemModel): Promise<void> {
    await this._router.navigate([], {
      queryParams: { page: item.id },
      relativeTo: this._activatedRoute,
    });
  }
}
