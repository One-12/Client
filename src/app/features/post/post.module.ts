import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './components/post.component';
import { PostDetailsCardsComponent } from './components/post-details-cards/post-details-cards.component';

@NgModule({
  declarations: [PostComponent, PostDetailsCardsComponent],
  imports: [PostRoutingModule, CommonModule, SharedModule],
})
export class PostModule {}
