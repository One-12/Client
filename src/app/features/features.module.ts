import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
    declarations: [FeaturesComponent],
    imports: [CommonModule, RouterModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
