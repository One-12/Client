import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ColorPickerModule } from 'ngx-color-picker';

import { SharedModule } from '../shared/shared.module';
import { PostRoutingModule } from './post-routing.module';

import { PostComponent } from './components/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CreatorsCornerComponent } from './components/creators-corner/creators-corner.component';
import { PostDetailsCardsComponent } from './components/post-details-cards/post-details-cards.component';
import { AddPostComponentComponent } from './components/creators-corner/add-post-component/add-post-component.component';
import { SearchTemplatesPanelComponent } from './components/creators-corner/search-templates-panel/search-templates-panel.component';

@NgModule({
  declarations: [
    PostComponent,
    CommentsComponent,
    CreatorsCornerComponent,
    PostDetailsCardsComponent,
    AddPostComponentComponent,
    SearchTemplatesPanelComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
    ColorPickerModule,
    PostRoutingModule,
    MatFormFieldModule,
  ],
})
export class PostModule {}
