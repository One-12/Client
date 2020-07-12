import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatorsCornerComponent } from './components/creators-corner.component';

const routes: Routes = [
  {
    path: '',
    component: CreatorsCornerComponent,
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
