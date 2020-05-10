import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NavItemModel } from '../../../models/nav/nav-item.model';

@Component({
  selector: 'one12-menu-items-card',
  templateUrl: './menu-items-card.component.html',
  styleUrls: ['./menu-items-card.component.scss'],
})
export class MenuItemsCardComponent {
  @Input()
  public navItems: NavItemModel[] = [];

  @Input()
  public selectedNavItem: NavItemModel;

  constructor(private readonly _router: Router, private readonly _activatedRoute: ActivatedRoute) {}

  public async onMenuItemClicked(item: NavItemModel): Promise<void> {
    await this._router.navigate([], {
      queryParams: { page: item.id },
      relativeTo: this._activatedRoute,
    });
  }
}
