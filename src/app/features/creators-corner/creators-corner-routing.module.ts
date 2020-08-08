import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudioComponent } from './components/studio/studio.component';
import { CreatorsCornerComponent } from './components/creators-corner.component';

const routes: Routes = [
  {
    path: '',
    component: CreatorsCornerComponent,
  },
  {
    path: 'studio',
    component: StudioComponent,
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
