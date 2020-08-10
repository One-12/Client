import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NgDatePipesModule } from 'ngx-pipes';
import { FeatherModule } from 'angular-feather';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Image, Video, Youtube } from 'angular-feather/icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { reducers } from './state';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { TagsFacade } from './state/tags/tags.facade';
import { PostsFacade } from './state/posts/posts.facade';

import { TagsEffects } from './state/tags/tags.effects';
import { PostsEffects } from './state/posts/posts.effects';

import { PostHttpService } from './services/post-http.service';

import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedCardComponent } from './components/feed-card/feed-card.component';
import { TagStreamComponent } from './components/tag-stream/tag-stream.component';
import { PopularPostsStreamComponent } from './components/popular-posts-stream/popular-posts-stream.component';
import { SupportCenterCardComponent } from './components/sidebar/support-center-card/support-center-card.component';
import { CreatePostTypeSheetComponent } from './components/_bottom-sheet/create-post-type-sheet/create-post-type-sheet.component';
import { NewsAndAnnouncementsCardComponent } from './components/sidebar/news-and-announcements-card/news-and-announcements-card.component';

const icons = { Image, Video, Youtube };

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
    CreatePostTypeSheetComponent,
  ],
  providers: [PostsFacade, TagsFacade, PostHttpService],
  imports: [
    SharedModule,
    CommonModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    FontAwesomeModule,
    NgDatePipesModule,
    HomeRoutingModule,
    MatBottomSheetModule,
    InfiniteScrollModule,
    FeatherModule.pick(icons),
    StoreModule.forFeature('home', reducers),
    EffectsModule.forFeature([PostsEffects, TagsEffects]),
    MatListModule,
  ],
  entryComponents: [CreatePostTypeSheetComponent],
})
export class HomeModule {}
