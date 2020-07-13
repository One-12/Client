import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxMasonryModule } from 'ngx-masonry';
import { FeatherModule } from 'angular-feather';
import { CheckCircle } from 'angular-feather/icons';

import { CreatorsCornerRoutingModule } from './creators-corner-routing.module';
import { CreatorsCornerComponent } from './components/creators-corner.component';
import { PostTemplateListComponent } from './components/post-template-list/post-template-list.component';
import { PostTemplateSearchComponent } from './components/post-template-search/post-template-search.component';

const icons = { CheckCircle };

@NgModule({
  declarations: [PostTemplateListComponent, PostTemplateSearchComponent, CreatorsCornerComponent],
  imports: [CommonModule, CreatorsCornerRoutingModule, NgxMasonryModule, FeatherModule.pick(icons)],
})
export class CreatorsCornerModule {}
