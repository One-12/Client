import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { reducers } from './state';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { TagsFacade } from './state/tags/tags.facade';
import { PostHttpService } from './services/post-http.service';
import { PostsFacade } from './state/posts/posts.facade';
import { PostsEffects } from './state/posts/posts.effects';

import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login/login.component';
import { FeedCardComponent } from './components/feed-card/feed-card.component';
import { TagStreamComponent } from './components/tag-stream/tag-stream.component';
import { HeaderComponent } from './components/header/header.component';
import { PopularPostsStreamComponent } from './components/popular-posts-stream/popular-posts-stream.component';
import { SupportCenterCardComponent } from './components/sidebar/support-center-card/support-center-card.component';
import { NewsAndAnnouncementsCardComponent } from './components/sidebar/news-and-announcements-card/news-and-announcements-card.component';
import { TagsEffects } from './state/tags/tags.effects';
import { MatChipsModule } from '@angular/material/chips';
import { NgDatePipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    FeedCardComponent,
    TagStreamComponent,
    HeaderComponent,
    SupportCenterCardComponent,
    PopularPostsStreamComponent,
    NewsAndAnnouncementsCardComponent,
  ],
  providers: [PostsFacade, TagsFacade, PostHttpService],
  imports: [
    SharedModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    HomeRoutingModule,
    InfiniteScrollModule,
    StoreModule.forFeature('home', reducers),
    EffectsModule.forFeature([PostsEffects, TagsEffects]),
    MatChipsModule,
    NgDatePipesModule,
  ],
})
export class HomeModule {}
