import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './components/post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [PostRoutingModule, CommonModule],
})
export class PostModule {}
