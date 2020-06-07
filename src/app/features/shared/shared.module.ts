import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import { SafePipe } from './pipes/safe.pipe';
import { RoundPipe } from './pipes/math/round.pipe';
import { NumberFormatterPipe } from './pipes/math/number-formatter.pipe';

import { TagsComponent } from './components/tags/tags.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [
    SafePipe,
    RoundPipe,
    TagsComponent,
    NumberFormatterPipe,
    SectionHeaderComponent,
    ProgressSpinnerComponent,
  ],
  exports: [SectionHeaderComponent, TagsComponent, RoundPipe, NumberFormatterPipe, SafePipe, ProgressSpinnerComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatRippleModule],
})
export class SharedModule {}
