import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '../shared/shared.module';
import { PostRoutingModule } from './post-routing.module';

import { PostComponent } from './components/post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PostDetailsCardsComponent } from './components/post-details-cards/post-details-cards.component';

@NgModule({
  declarations: [PostComponent, PostDetailsCardsComponent, CommentsComponent, AddPostComponent],
  imports: [PostRoutingModule, CommonModule, SharedModule, MatIconModule, MatButtonModule],
})
export class PostModule {}
