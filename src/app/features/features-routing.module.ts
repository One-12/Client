import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesComponent } from './features.component';

const routes: Routes = [
    {
        path: '',
        component: FeaturesComponent,
        children: [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }],
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FeaturesRoutingModule {}
