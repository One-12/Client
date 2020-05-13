import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SharedModule } from '../shared/shared.module';
import { PostRoutingModule } from './post-routing.module';

import { PostComponent } from './components/post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PostDetailsCardsComponent } from './components/post-details-cards/post-details-cards.component';
import { SearchTemplatesComponent } from './components/add-post/search-templates/search-templates.component';

@NgModule({
  declarations: [
    PostComponent,
    AddPostComponent,
    CommentsComponent,
    SearchTemplatesComponent,
    PostDetailsCardsComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    PostRoutingModule,
    MatFormFieldModule,
  ],
})
export class PostModule {}
