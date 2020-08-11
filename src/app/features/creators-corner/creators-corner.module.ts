import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { NgxMasonryModule } from 'ngx-masonry';
import { ColorPickerModule } from 'ngx-color-picker';

import { FeatherModule } from 'angular-feather';
import { Box, CheckCircle, Info, Type } from 'angular-feather/icons';

import { HeaderComponent } from './components/header/header.component';
import { StudioComponent } from './components/studio/studio.component';
import { CreatorsCornerComponent } from './components/creators-corner.component';
import { PostTemplateListComponent } from './components/post-template-list/post-template-list.component';
import { PostTemplateSearchComponent } from './components/post-template-search/post-template-search.component';
import { PostDetailsBottomSheetComponent } from './components/studio/_bottom-sheet/post-details-bottom-sheet/post-details-bottom-sheet.component';

import { SharedModule } from '../shared/shared.module';
import { CreatorsCornerRoutingModule } from './creators-corner-routing.module';
import { TextBottomSheetComponent } from './components/studio/_bottom-sheet/text-bottom-sheet/text-bottom-sheet.component';

const icons = { CheckCircle, Type, Box, Info };

@NgModule({
  declarations: [
    StudioComponent,
    HeaderComponent,
    CreatorsCornerComponent,
    PostTemplateListComponent,
    PostTemplateSearchComponent,
    PostDetailsBottomSheetComponent,
    TextBottomSheetComponent,
  ],
  imports: [
    FormsModule,
    SharedModule,
    CommonModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatRippleModule,
    NgxMasonryModule,
    MatCheckboxModule,
    ColorPickerModule,
    MatFormFieldModule,
    MatBottomSheetModule,
    FeatherModule.pick(icons),
    CreatorsCornerRoutingModule,
  ],
  entryComponents: [PostDetailsBottomSheetComponent],
})
export class CreatorsCornerModule {}
