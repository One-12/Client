import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { TagStreamComponent } from './components/tag-stream/tag-stream.component';

@NgModule({
    declarations: [HomeComponent, TagStreamComponent],
    imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
