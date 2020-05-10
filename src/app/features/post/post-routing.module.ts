import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from './components/post.component';
import { AddPostComponent } from './components/add-post/add-post.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
  },
  {
    path: 'add',
    component: AddPostComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class PostRoutingModule {}
