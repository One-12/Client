import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxMasonryModule } from 'ngx-masonry';
import { FeatherModule } from 'angular-feather';
import { Box, CheckCircle, Type } from 'angular-feather/icons';

import { HeaderComponent } from './components/header/header.component';
import { StudioComponent } from './components/studio/studio.component';
import { CreatorsCornerComponent } from './components/creators-corner.component';
import { PostTemplateListComponent } from './components/post-template-list/post-template-list.component';
import { PostTemplateSearchComponent } from './components/post-template-search/post-template-search.component';

import { CreatorsCornerRoutingModule } from './creators-corner-routing.module';

const icons = { CheckCircle, Type, Box };

@NgModule({
  declarations: [
    PostTemplateListComponent,
    PostTemplateSearchComponent,
    CreatorsCornerComponent,
    StudioComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, CreatorsCornerRoutingModule, NgxMasonryModule, FeatherModule.pick(icons)],
})
export class CreatorsCornerModule {}
