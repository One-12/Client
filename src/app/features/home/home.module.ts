import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';

import { reducers } from './state';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home.component';
import { TagStreamComponent } from './components/tag-stream/tag-stream.component';

@NgModule({
  declarations: [HomeComponent, TagStreamComponent],
  imports: [CommonModule, HomeRoutingModule, MatButtonModule, SharedModule, StoreModule.forFeature('home', reducers)],
})
export class HomeModule {}
