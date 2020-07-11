import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostTemplateListComponent } from './post-template-list/post-template-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostTemplateListComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatorsCornerRoutingModule {}
