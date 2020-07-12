import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorsCornerRoutingModule } from './creators-corner-routing.module';
import { PostTemplateListComponent } from './post-template-list/post-template-list.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { PostTemplateSearchComponent } from './post-template-search/post-template-search.component';

@NgModule({
  declarations: [PostTemplateListComponent, PostTemplateSearchComponent],
  imports: [CommonModule, CreatorsCornerRoutingModule, NgxMasonryModule],
})
export class CreatorsCornerModule {}
