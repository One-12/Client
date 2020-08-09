import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgxMasonryModule } from 'ngx-masonry';
import { FeatherModule } from 'angular-feather';
import { Box, CheckCircle, Info, Type } from 'angular-feather/icons';

import { HeaderComponent } from './components/header/header.component';
import { StudioComponent } from './components/studio/studio.component';
import { CreatorsCornerComponent } from './components/creators-corner.component';
import { PostTemplateListComponent } from './components/post-template-list/post-template-list.component';
import { PostTemplateSearchComponent } from './components/post-template-search/post-template-search.component';

import { CreatorsCornerRoutingModule } from './creators-corner-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

const icons = { CheckCircle, Type, Box, Info };

@NgModule({
  declarations: [
    PostTemplateListComponent,
    PostTemplateSearchComponent,
    CreatorsCornerComponent,
    StudioComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    CreatorsCornerRoutingModule,
    NgxMasonryModule,
    FeatherModule.pick(icons),
    SharedModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
  ],
})
export class CreatorsCornerModule {}
