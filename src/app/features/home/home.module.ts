import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { reducers } from './state';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { TagsFacade } from './state/tags/tags.facade';
import { PostService } from './services/post.service';
import { PostsFacade } from './state/posts/posts.facade';
import { PostsEffects } from './state/posts/posts.effects';

import { HomeComponent } from './components/home.component';
import { FeedCardComponent } from './components/feed-card/feed-card.component';
import { TagStreamComponent } from './components/tag-stream/tag-stream.component';
import { MenuItemsCardComponent } from './components/sidebar/menu-items-card/menu-items-card.component';
import { PopularPostsStreamComponent } from './components/popular-posts-stream/popular-posts-stream.component';
import { SupportCenterCardComponent } from './components/sidebar/support-center-card/support-center-card.component';
import { NewsAndAnnouncementsCardComponent } from './components/sidebar/news-and-announcements-card/news-and-announcements-card.component';
import { TimeLineHeaderComponent } from './components/time-line-header/time-line-header.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    TagStreamComponent,
    FeedCardComponent,
    MenuItemsCardComponent,
    SupportCenterCardComponent,
    NewsAndAnnouncementsCardComponent,
    PopularPostsStreamComponent,
    TimeLineHeaderComponent,
    LoginComponent,
  ],
  providers: [PostsFacade, TagsFacade, PostService],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    SharedModule,
    StoreModule.forFeature('home', reducers),
    EffectsModule.forFeature([PostsEffects]),
    InfiniteScrollModule,
  ],
})
export class HomeModule {}
