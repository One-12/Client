import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from './components/post.component';
import { CreatorsCornerComponent } from './components/creators-corner/creators-corner.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
  },
  {
    path: 'creators-corner',
    component: CreatorsCornerComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class PostRoutingModule {}
