import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxMasonryModule } from 'ngx-masonry';

import { CreatorsCornerRoutingModule } from './creators-corner-routing.module';
import { CreatorsCornerComponent } from './components/creators-corner.component';
import { PostTemplateListComponent } from './components/post-template-list/post-template-list.component';
import { PostTemplateSearchComponent } from './components/post-template-search/post-template-search.component';

@NgModule({
  declarations: [PostTemplateListComponent, PostTemplateSearchComponent, CreatorsCornerComponent],
  imports: [CommonModule, CreatorsCornerRoutingModule, NgxMasonryModule],
})
export class CreatorsCornerModule {}
