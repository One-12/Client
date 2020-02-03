import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';

import { reducers } from './state';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { TagsFacade } from './state/tags/tags.facade';
import { PostService } from './services/post.service';
import { PostsFacade } from './state/posts/posts.facade';
import { HomeComponent } from './components/home.component';
import { TagStreamComponent } from './components/tag-stream/tag-stream.component';
import { FeedCardComponent } from './components/feed-card/feed-card.component';
import { MenuItemsCardComponent } from './components/sidebar/menu-items-card/menu-items-card.component';
import { SupportCenterCardComponent } from './components/sidebar/support-center-card/support-center-card.component';
import { NewsAndAnnouncementsCardComponent } from './components/sidebar/news-and-announcements-card/news-and-announcements-card.component';
import { PopularPostsStreamComponent } from './components/popular-posts-stream/popular-posts-stream.component';

@NgModule({
  declarations: [
    HomeComponent,
    TagStreamComponent,
    FeedCardComponent,
    MenuItemsCardComponent,
    SupportCenterCardComponent,
    NewsAndAnnouncementsCardComponent,
    PopularPostsStreamComponent,
  ],
  providers: [PostsFacade, TagsFacade, PostService],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    SharedModule,
    StoreModule.forFeature('home', reducers),
  ],
})
export class HomeModule {}
